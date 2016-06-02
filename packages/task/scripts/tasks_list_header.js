if (Meteor.isClient) {
  Template.tasksListHeader.events({
    'click a.day-before': function(event) {
      event.preventDefault();
      Router.go('/workday/' + moment(this.current_date).subtract(1, 'days').format('YYYY-MM-DD'));
    },
    'click a.day-after': function(event) {
      event.preventDefault();
      Router.go('/workday/' + moment(this.current_date).add(1, 'days').format('YYYY-MM-DD'));
    }
  });
}
