exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'base_specs.js'
    ],

    capabilities: {
        'browserName': 'chrome',
    },

    baseUrl: 'http://localhost:8000/app',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
