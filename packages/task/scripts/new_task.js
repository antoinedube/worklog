function parse_time(date, time) {
  var hours = time.split(':')[0];
  var minutes = time.split(':')[1];
  var date_time = moment(date).set('hour', hours).set('minute', minutes);
  return date_time;
}

if (Meteor.isClient) {

  Template.newTask.events({
    'submit #new-task': function (event) {
      event.preventDefault();
      var type_text = event.target.task_type.value;
      var begin_time = parse_time(this.current_date, event.target.begin_time.value);
      var end_time = parse_time(this.current_date, event.target.end_time.value);

      if (type_text === '' || begin_time === '' || end_time === '') return;

      Tasks.insert({
        begin_time: begin_time.toDate(),
        end_time: end_time.toDate(),
        duration: end_time.diff(begin_time),
        type: type_text,
        created_by: Meteor.userId()
      });

      event.target.reset();
    }
  });
}
