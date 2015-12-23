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
      'worklog:core',
      'mongo',
      'aldeed:simple-schema',
      'iron:router',
      'templating',
      'fourseven:scss',
      'momentjs:moment'
  ]);

  api.addFiles([
      'templates/task_view.html',
      'templates/new_task.html',
      'templates/tasks_list.html',
      'stylesheets/task_view.scss',
      'stylesheets/new_task.scss',
      'stylesheets/tasks_list.scss',
      'scripts/task.js',
      'models/schema.js',
      'scripts/routes.js'
  ]);
});

Package.onTest(function(api) {
  api.use([
      'ecmascript',
      'tinytest',
      'worklog:task'
  ]);
  api.addFiles([
      'tests/task_tests.js',
      'tests/schema_tests.js'
  ]);
});
