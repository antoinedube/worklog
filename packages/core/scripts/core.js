if (Meteor.isClient) {
  Template.core.onRendered(function() {
    Router.go('/tasks_list')
  });
}
