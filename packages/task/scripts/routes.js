Router.route('/tasks_list/:date', {
  template: 'tasks_list',
  data: function() {
    return moment(date).format('YYYY-MM-DD');
  }
});
