if (Meteor.isClient) {
  Template.tasks_list_header.events({
    'click a.day-before': function(event) {
      event.preventDefault();
      Router.go('/workday/' + moment(this.date).subtract(1, 'days').format('YYYY-MM-DD'));
    },
    'click a.day-after': function(event) {
      event.preventDefault();
      Router.go('/workday/' + moment(this.date).add(1, 'days').format('YYYY-MM-DD'));
    }
  });
}
