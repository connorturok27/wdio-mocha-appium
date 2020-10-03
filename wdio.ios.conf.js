const {config} = require('./wdio.conf');
delete config.capabilities;

exports.config = {
    ...config,
    path: '/',
    // ...
    capabilities: [{
        /*
         * safaridriver can only handle 1 instance unfortunately
         * https://developer.apple.com/documentation/webkit/about_webdriver_for_safari
         */
        browserName: 'safari',
        platformName: 'ios',
        maxInstances: 1,

    }],
    services: ['safaridriver'],

    // options
    safaridriverArgs: ['-p 4444'], // use the specified port. Default is 4444
    safaridriverLogs: './',
};
