// #!/usr/bin/env babel-node

const google = require('googleapis');
const config = require('../config');
const j2c = require('json2csv');
const moment = require('moment');
const settings = require('./settings');

const key = config.googleAuth;
const HOME = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE);
const reports = settings.reports;
const reportDates = settings.reportDates;
const views = config.gaViews;
const VIEW_ID = views.basis;

const jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null);

jwtClient.authorize((err) => {
    if (err) {
        console.log(err);
        return;
    }
    const analytics = google.analytics('v3');

    // TEST
    console.log(HOME);
    queryData(analytics, reports[0], reportDates.startDate, reportDates.startDate);

    // if (reportDates.type === 'total') {
    //     reports.map((r) => {
    //         queryData(analytics, r, reportDates.startDate, reportDates.endDate);
    //     });
    // } else if (reportDates.type === 'daily') {
    //     // Get reports for each day
    //
    //     // Initialize nextDay
    //     let nextDay = reportDates.startDate;
    //     while (nextDay !== oneDayMore(reportDates.endDate)) {
    //         reports.map((r) => {
    //             // console.log(nextDay);
    //             queryData(analytics, r, nextDay, nextDay);
    //         });
    //         nextDay = oneDayMore(nextDay);
    //     }
    // } else {
    //     console.error('Invalid report date type');
    //     return;
    // }

});

function oneDayMore(date) {
    return moment(date, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD');
}

function queryData(analytics, reports, startDate, endDate) {
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
        console.log(JSON.stringify(response, null, 4));
    });
}

// j2c(opts, (err, csv) => {
//     if (err) {
//         console.log('error with json');
//         throw err;
//     }
//     if (!fs.existsSync(HOME + '/analytics-files')) {
//         fs.mkdirSync(HOME + '/analytics-files');
//     }
//     fs.writeFile(HOME + '/analytics-files/' + 'elabels-' + exportFilename + '.csv', csv, 'utf8', (error) => {
//         if (error) {
//             console.log('error writing to file');
//             throw error;
//         }
//         console.log('elabels CSV saved');
//         if (callback)
//             callback(null, true);
//         }
//     );
// });
