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

    var formatted_duration = '';
    formatted_duration += hours > 0 ? hours + 'h' : '';
    formatted_duration += minutes > 0 ? minutes + 'm' : '';

    return formatted_duration;
  });

  Template.registerHelper('work_categories', function() {
    var user_settings = UserSettings.findOne({});
    if (user_settings && user_settings.work_categories) {
      return user_settings.work_categories;
    }
  });
}
