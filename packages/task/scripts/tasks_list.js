if (Meteor.isClient) {
  Template.tasksList.helpers({
    tasks: function() {
      return Tasks.find(
        {
          begin_time: {
            '$gte': moment(this.date).startOf('day').toDate(),
            '$lt': moment(this.date).add(1, 'days').startOf('day').toDate()
          }
        },
        {
          sort: {
            begin_time: +1
          }
        }
      );
    }
  });
}
