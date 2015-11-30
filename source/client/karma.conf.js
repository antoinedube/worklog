module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'vendor/angular/angular.js',
      'vendor/angular-activerecord/src/angular-activerecord.js',
      'vendor/angular-resource/angular-resource.js',
      'vendor/angular-route/angular-route.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/**/**/*.model.js',
      'app/**/**/*.factory.js',
      'app/**/**/*.config.js',
      'app/**/**/*.controller.js',
      'app/**/**/*.directive.js',
      'app/**/**/*.test.js'
    ],

    autoWatch : true,

    singleRun : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],
  });
};
