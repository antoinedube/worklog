Package.describe({
  name: 'worklog:header',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
      'ecmascript',
      'worklog:core',
      'templating',
      'fourseven:scss'
  ]);

  api.addFiles([
      'templates/header.html',
      'stylesheets/header.scss',
      'scripts/header.js'
  ]);
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'worklog:header']);
  api.addFiles('tests/header-tests.js');
});
