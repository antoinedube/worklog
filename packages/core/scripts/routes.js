Router.configure({
  layoutTemplate: 'core'
});

Router.route('/', function() {
  Router.go('/workday');
});
