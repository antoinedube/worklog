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
      'iron:router',
      'templating',
      'fourseven:scss',
      'momentjs:moment'
  ]);

  api.addFiles([
      'templates/task_view.html',
      'templates/new_task.html',
      'templates/summary.html',
      'templates/tasks_list.html',
      'templates/tasks_list_header.html',
      'templates/workday.html',
      'stylesheets/task_view.scss',
      'stylesheets/new_task.scss',
      'stylesheets/tasks_list.scss',
      'stylesheets/workday.scss',
      'scripts/new_task.js',
      'scripts/tasks_list.js',
      'scripts/tasks_list_header.js',
      'scripts/summary.js',
      'models/collection.js',
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
      'tests/new_task_tests.js',
      'tests/collection_tests.js',
      'tests/tasks_list_header_tests.js',
      'tests/tasks_list_tests.js'
  ]);
});
