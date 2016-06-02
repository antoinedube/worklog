function date_criteria(date) {
  return {
    '$gte': moment(date).startOf('day').toDate(),
    '$lt': moment(date).add(1, 'days').startOf('day').toDate()
  };
}

function sum_duration(tasks) {
  var sum_duration = 0;
  _.forEach(tasks, function(task) {
    sum_duration += task.duration;
  });
  return sum_duration;
}

if (Meteor.isClient) {
  Template.summary.onCreated(function() {
    this.current_date = new ReactiveVar(this.data.current_date);
  });

  Template.summary.helpers({
    count_duration: function(type, date) {
      var search_criteria = {};
      if (type === 'total') {
        search_criteria = {
          begin_time: date_criteria(date)
        };
      }
      else {
        search_criteria = {
          begin_time: date_criteria(date),
          type: type
        };
      }

      var tasks = Tasks.find(search_criteria).fetch();

      return { 'duration': sum_duration(tasks) };
    }
  });
}
