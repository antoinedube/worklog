Package.describe({
  name: 'worklog:user-settings',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'iron:router',
    'templating'
  ]);
  api.mainModule('scripts/user-settings.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('worklog:user-settings');
  api.mainModule('user-settings-tests.js');
});
