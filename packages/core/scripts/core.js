if (Meteor.isClient) {
  Template.registerHelper('format_time', function(time) {
    if (!time) return '--';
    return moment(time).format('HH:mm');
  });

  Template.registerHelper('format_long_date', function(date) {
    if (!date) return '--';
    return moment(date).format('DD MMMM YYYY');
  });

  Template.registerHelper('show_duration', function(duration) {
    if (!duration) return '--';
    var hours = parseInt(duration/3600000);
    var minutes = parseInt(duration/60000) - hours*60;
    return hours + 'h' + ' ' + minutes + 'm';
  });
}
