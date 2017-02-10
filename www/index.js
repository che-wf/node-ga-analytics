#!/usr/bin/env babel-node

const google = require('googleapis');
const config = require('../config');

const key = config.googleAuth;
const views = config.gaViews;
const VIEW_ID = views.basis;

const jwtClient = new google.auth.JWT(
	key.client_email,
	null,
	key.private_key, ['https://www.googleapis.com/auth/analytics.readonly'],
	null
);

jwtClient.authorize((err, tokens) => {
	if (err) {
		console.log(err);
		return;
	}
	const analytics = google.analytics('v3');
	queryData(analytics);
});


function queryData(analytics) {
	analytics.data.ga.get({
		'auth': jwtClient,
		'ids': VIEW_ID,
		'metrics': 'ga:uniquePageviews',
		'dimensions': 'ga:pagePath',
		'start-date': '30daysAgo',
		'end-date': 'yesterday',
		'sort': '-ga:uniquePageviews',
		'max-results': 10,
		'filters': 'ga:pagePath=~/ch_[-a-z0-9]+[.]html$',
	}, (err, response) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(JSON.stringify(response, null, 4));
	});
}
