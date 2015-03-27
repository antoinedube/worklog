module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/ui.bootstrap/src/transition/transition.js',
      'app/bower_components/ui.bootstrap/src/modal/modal.js',
      'app/**/model.js',
      'app/**/controller.js',
      'app/**/test.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS', 'Firefox'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

  });
};
