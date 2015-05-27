exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'base_specs.js',
        'tasks-list_specs.js'
    ],

    multiCapabilities: [
        {'browserName': 'chrome'},
        {'browserName': 'firefox'},
    ],

    baseUrl: 'http://localhost:8000',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
