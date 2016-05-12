if (Meteor.isClient) {

  function criteria_today(date) {
    return {
      "$gte": moment(date).startOf('day').toDate(),
      "$lt": moment(date).add(1, 'days').startOf('day').toDate()
    };
  }

  function sum_duration(tasks) {
    var sum_duration = 0;
    _.forEach(tasks, function(task) {
      sum_duration += task.duration;
    });
    return sum_duration;
  }

  Template.summary.helpers({
    analysis_count: function() {
      var search_criteria = { begin_time: criteria_today(this.date), type: "100 - Analysis" };
      var tasks = Tasks.find(search_criteria).fetch();

      return sum_duration(tasks);
    },

    planning_count: function() {
      var search_criteria = { begin_time: criteria_today(this.date), type: "104 - Planning/Scrum" };
      var tasks = Tasks.find(search_criteria).fetch();

      return sum_duration(tasks);
    },

    total_count: function() {
      var search_criteria = { begin_time: criteria_today(this.date) };
      var tasks = Tasks.find(search_criteria).fetch();

      return sum_duration(tasks);
    },

    count: function(type) {
      console.log('type: ', type);
    }
  });
}
