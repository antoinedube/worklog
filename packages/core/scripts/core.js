if (Meteor.isClient) {
  Template.registerHelper('format_time', function(time) {
    return moment(time).format('HH:mm');
  });

  Template.registerHelper('format_long_date', function(date) {
    return moment(date).format('DD MMMM YYYY');
  });
}
