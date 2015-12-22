Package.describe({
  name: 'worklog:login',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
      'ecmascript',
      'iron:router'
  ]);

  api.use('templating', 'client');
  api.addFiles([
      'templates/login.html',
      'scripts/login.js',
      'scripts/routes.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('worklog:login');
  api.addFiles('login-tests.js');
});
