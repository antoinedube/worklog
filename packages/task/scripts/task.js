if (Meteor.isClient) {

  function parse_time(time) {
    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    return moment({hour: hours, minute: minutes}).toDate();
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

  Template.tasks_list_header.events({
    'click a.day-before': function(event) {
      event.preventDefault();
      Router.go('/tasks_list/' + moment(this.date).subtract(1, 'days').format('YYYY-MM-DD'));
    },
    'click a.day-after': function(event) {
      event.preventDefault();
      Router.go('/tasks_list/' + moment(this.date).add(1, 'days').format('YYYY-MM-DD'));
    }
  });

  Template.tasks_list.helpers({
    tasks: function() {
      return Tasks.find(
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
    }
  });
}

