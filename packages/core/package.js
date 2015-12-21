Package.describe({
  name: 'worklog:core',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
      'ecmascript',
      'iron:router',
      'templating'
  ]);
  api.addFiles([
      'scripts/routes.js',
      'templates/core.html'
  ]);
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'worklog:core']);
  api.addFiles('tests/core-tests.js');
});
