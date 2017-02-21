exports.reports = [
    {
        dimensions: 'ga:channelGrouping,ga:sourceMedium', // Source / Medium
        metrics: 'ga:sessions'
        // metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping', // Traffic Type
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:adContent', // Ad Content
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:campaign', // Campaign
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:keyword', // Keyword
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:exitPagePath', // Exit Page
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:landingPagePath', // Landing Page
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:pageDepth', // Page Depth
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:pagePathLevel1', // Page Path Level 1
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:pagePathLevel2', // Page Path Level 2
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:pagePathLevel3', // Page Path Level 3
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:pagePathLevel4', // Page Path Level 4
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:searchKeyword', // Search Term
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:daysToTransaction', // Days to Transaction
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:socialNetwork', // Social Network
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:userAgeBracket', // Age
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:browserSize', // Browser Size
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:browserVersion', // Browser Version
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:city', // City
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:sessionCount', // Count of Sessions
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:country', // Country
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:userGender', // Gender
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:language', // Language
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:mobileDeviceInfo', // Mobile Device Info
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:mobileDeviceModel', // Mobile Device Model
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }, {
        dimensions: 'ga:channelGrouping,ga:dayOfWeek', // Day of Week
        metrics: 'ga:sessions,ga:percentNewSessions,ga:users,ga:newUsers,ga:bounceRate,ga:pageviewsPerSession,ga:avgSessionDuration,ga:transactionsPerSession,ga:transactions,ga:transactionRevenue'
    }
];

exports.reportDates = {
    type: 'daily', // daily, total
    startDate: '2015-11-01',
    endDate: '2015-11-20'
};
