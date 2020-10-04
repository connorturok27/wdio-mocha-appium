const {config} = require('./wdio.conf');
delete config.capabilities;
delete config.services

exports.config = {
    ...config,
    appium: {
        command: 'appium',
        args: {},
    },
    port: 4723,
    path: '/wd/hub',
    capabilities: [{
        platformName: 'iOS',
        automationName: 'XCUITest',
        browserName: 'Safari',
        maxInstances: 1,
        deviceName: 'iPhone 11', // pass the udid or device name
        platformVersion: '13.3'
    }],
    services: ['appium'],
};
