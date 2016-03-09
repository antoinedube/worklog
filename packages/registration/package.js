Package.describe({
  name: 'worklog:registration',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'templating',
    'fourseven:scss',
    'accounts-password'
  ]);
  api.addFiles([
    'registration.js',
    'registration.html'
  ]);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('registration');
  api.addFiles('registration-tests.js');
});
