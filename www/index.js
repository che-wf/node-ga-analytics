// #!/usr/bin/env babel-node

const google = require('googleapis');
const config = require('../config');
const settings = require('./settings');

const key = config.googleAuth;
const reports = settings.reports;
const views = config.gaViews;
const VIEW_ID = views.basis;

const jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null);

jwtClient.authorize((err) => {
    if (err) {
        console.log(err);
        return;
    }
    const analytics = google.analytics('v3');
    reports.map((r) => {
        queryData(analytics, r);
    });
});

function queryData(analytics, reports, dates) {
    analytics.data.ga.get({
        auth: jwtClient,
        ids: VIEW_ID,
        dimensions: reports.dimensions,
        metrics: reports.metrics,
        'start-date': '2015-11-01',
        'end-date': '2015-11-01',
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
