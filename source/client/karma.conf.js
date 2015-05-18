module.exports = function(config){
  config.set({

    basePath : './',

      // Problems matching files. app/**/test.js picks up files in ui.bootstrap
    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/**/model.js',
      'app/**/controller.js',
      'app/**/test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],
  });
};
