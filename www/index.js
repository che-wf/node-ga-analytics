#!/usr/bin/env babel-node
const google = require('googleapis');
const config = require('../config');
const fs = require('fs');
const j2c = require('json2csv');
const moment = require('moment');
const settings = require('./settings');

const key = config.googleAuth;
const reports = settings.reports;
const reportDates = settings.reportDates;
const views = config.gaViews;
const VIEW_ID = views.basis;

// Rate Limiter
var fnQueue = [];

// File Structure
const HOME = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE);
const DBINFO = JSON.parse(fs.readFileSync(HOME + '/.dropbox/info.json', 'utf8', (err, data) => {
	if (err) {
		console.log('Dropbox is not found.');
		return;
	}
	return data;
}));

const DBPATH = (DBINFO.business !== null && DBINFO.business !== 'undefined') ? DBINFO.business.path : DBINFO.personal.path;


const jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null);

jwtClient.authorize((err) => {
	if (err) {
		console.log(err);
		return;
	}
	const analytics = google.analytics('v3');

	// TEST
	// queryData(analytics, reports[0], reportDates.startDate, reportDates.startDate);

	if (reportDates.type === 'total') {
		reports.map((r) => {
			queryData(r, reportDates.startDate, reportDates.endDate);
		});
	} else if (reportDates.type === 'daily') {
		// Get reports for each day

		// Initialize nextDay
		var nextDay = reportDates.startDate;
		while (nextDay !== oneDayMore(reportDates.endDate)) {
			reports.map((r, x) => {
				fnQueue.push([r, nextDay, nextDay]);
			});
			nextDay = oneDayMore(nextDay);
		}

		rateLimiter(fnQueue);
		console.log(fnQueue.length + ' items');

		function rateLimiter(thisArray, callback) {
			var count = 0,
				rateNum = 10,
				rateTime = 5000, // Set to five for latency
				items = [];
			var batches = thisArray.length / rateNum;

			function splitArray() {
				items = thisArray.splice(0, rateNum);
				console.log('batch ' + (count + 1) + ' out of ' + batches);

				// Insert function here on var "items"
				items.map((f, x) => {
					queryData(analytics, f[0], f[1], f[2]);
				});
				// Insert function here on var "items"

				setTimeout(() => {
					count++;
					if (count < batches) {
						splitArray();
					} else {
						console.log('process complete');
						if (callback) callback(null, true);
					}
				}, rateTime);
			}

			splitArray();
		}

		// console.log(fnQueue);
	} else {
		console.error('Invalid report date type');
		return;
	}

});


function oneDayMore(date) {
	return moment(date, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
}

function queryData(analytics, reports, startDate, endDate, callback) {
	analytics.data.ga.get({
		auth: jwtClient,
		ids: VIEW_ID,
		dimensions: reports.dimensions,
		metrics: reports.metrics,
		'start-date': startDate,
		'end-date': endDate,
		sort: '-ga:sessions',
		// 'max-results': 50,
	}, (err, response) => {
		if (err) {
			// console.log('ERROR: ' + err.errors[0].message);
			console.log(err);
			return;
		}
		var fields = response.columnHeaders.map((h) => {
			return h.name;
		});
		var dataRows = response.rows.map((d) => {
			var dr = {};
			fields.map((f, x) => {
				dr[f] = d[x];
			});
			return dr;
		});
		const opts = {
			data: dataRows,
			fields: fields,
		};
		// console.log(JSON.stringify(response, null, 4));
		j2c(opts, (err, csv) => {
			if (err) {
				console.log('Error with json');
				throw err;
			}
			if (!fs.existsSync(DBPATH + '/analytics-files')) {
				fs.mkdirSync(DBPATH + '/analytics-files');
			}
			fs.writeFile(DBPATH + '/analytics-files/' + startDate + '-' + endDate + '_' + reportDates.type + '_' + reports.dimensions + '.csv', csv, 'utf8', (error) => {
				if (error) {
					console.log('error writing to file');
					throw error;
				}
				console.log('Report saved');
				if (callback) callback(null, true);
			});
		});
	});
}
