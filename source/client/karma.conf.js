module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS','Firefox'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            ],

  });
};
