Package.describe({
  name: 'worklog:task',
  version: '0.0.1',
  summary: 'Task schema for worklog',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
      'ecmascript',
      'mongo',
      'aldeed:simple-schema',
      'iron:router',
      'templating'
  ]);
  api.addFiles([
      'scripts/task.js',
      'scripts/routes.js',
      'schemas/task-schema.js',
      'templates/tasks-list.html',
      'templates/task-view.html',
      'templates/new-task.html'
  ]);
});

Package.onTest(function(api) {
  api.use([
      'ecmascript',
      'tinytest',
      'worklog:task'
  ]);
  api.addFiles([
      'tests/task-tests.js',
      'tests/schema-tests.js'
  ]);
});
