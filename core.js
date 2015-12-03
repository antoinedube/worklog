if (Meteor.isClient) {

  function parse_time(time) {
    var datetime = new Date();
    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    datetime.setHours(hours,minutes,0,0);
    return datetime;
  }

  Template.new_task.events({
    'submit #new-task': function (event) {
      event.preventDefault();
      if (event.target.issue.value === "") return;

      Tasks.insert({
        begin_time: parse_time(event.target.begin_time.value),
        end_time: parse_time(event.target.end_time.value),
        issue: event.target.issue.value
      });

      event.target.begin_time.value = "";
      event.target.end_time.value = "";
      event.target.issue.value  = "";
    }
  });

  Template.tasks_list.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {begin_time: +1}});
    }
  });
}

