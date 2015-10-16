module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-activerecord/src/angular-activerecord.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/angular-route/angular-route.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
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
