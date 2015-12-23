Package.describe({
  name: 'worklog:dashboard',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
      'ecmascript',
      'worklog:core'
  ]);

  api.addFiles('dashboard.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('worklog:dashboard');
  api.addFiles('dashboard-tests.js');
});
