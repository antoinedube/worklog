if (Meteor.isClient) {

  function parse_time(time) {
    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    return moment({hour: hours, minute: minutes});
  }

  Template.new_task.events({
    'submit #new-task': function (event) {
      event.preventDefault();
      var type_id = event.target.task_type.value-1;
      var type_text = event.target.task_type[type_id].text;
      var begin_time = parse_time(event.target.begin_time.value);
      var end_time = parse_time(event.target.end_time.value);

      if (type_text === "" || begin_time === "" || end_time === "") return;

      Tasks.insert({
        begin_time: begin_time.toDate(),
        end_time: end_time.toDate(),
        duration: end_time.diff(begin_time),
        type: type_text
      });

      event.target.reset();
    }
  });
}