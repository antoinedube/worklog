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
      'templating',
      'iron:router',
      'fourseven:scss',
      'worklog:core'
  ]);

  api.addFiles([
      'templates/login.html',
      'scripts/login.js',
      'scripts/routes.js',
      'stylesheets/login.scss'
  ]);
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'worklog:login']);
  api.addFiles('tests/login-tests.js');
});
