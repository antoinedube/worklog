Router.route('/tasks_list/:date', {
  template: 'tasks_list',
  data: function() {
    date = moment(this.params.date).format('YYYY-MM-DD');
    return {
      date: date
    }
  }
});

Router.route('/tasks_list', function() {
  var date = moment().format('YYYY-MM-DD');
  Router.go('/tasks_list/' + date);
});
