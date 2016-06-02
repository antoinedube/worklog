Router.route('/workday/:date', {
  template: 'workday',
  data: function() {
    var date = moment(this.params.date).format('YYYY-MM-DD');
    return {
      date: date
    };
  }
});

Router.route('/workday', function() {
  var date = moment().format('YYYY-MM-DD');
  Router.go('/workday/' + date);
});
