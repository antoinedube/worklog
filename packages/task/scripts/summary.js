if (Meteor.isClient) {
  Template.summary.helpers({
    workday_summary: function() {
      var todays_tasks = Tasks.find(
        {
          begin_time: {
            "$gte": moment(this.date).startOf('day').toDate(),
            "$lt": moment(this.date).add(1, 'days').startOf('day').toDate()
          }
        },
        {
          sort: {
            begin_time: +1
          }
        }
      );
      todays_tasks.forEach(function(task) {
        console.log('Task: ', task);
      });
      // return array of type/time
    }
  });
}
