Router.route('/dashboard', {
  template: 'dashboard'
});

function draw() {
  var tasks = Tasks.find().fetch();

  _(tasks).forEach(function(task) {
    console.log('task: ', task.begin_time, task.duration);
  });

  var line = d3.svg
               .line()
               .x(function (d) { return d.begin_time; })
               .y(function(d) { return d.duration; });

  d3.select('#time-series')
    .append('g')
    .append('path')
    .datum(tasks)
    .attr('class', 'line')
    .attr('d', line);

}

if (Meteor.isClient) {
  Template.dashboard.events({
    'click button': function() {
      draw();
    }
  });
}
