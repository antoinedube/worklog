Package.describe({
  name: 'worklog:workday',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript', 'mongo', 'aldeed:simple-schema']);
  api.addFiles('scripts/workday.js');
  api.addFiles('schemas/workday-schema.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('worklog:workday');
  api.addFiles('tests/schema-tests.js');
});
