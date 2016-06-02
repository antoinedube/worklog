Router.route('/dashboard', {
  template: 'dashboard'
});

function draw() {
  var tasks = Tasks.find().fetch();

  var xScale = d3.time.scale().domain([tasks[0], tasks[tasks.length -1]]).range([0,500]);
  var xAxis = d3.svg.axis().orient('bottom').scale(xScale);

  var line = d3.svg
               .line()
               .x(function (d) { return d.begin_time; })
               .y(function(d) { return d.duration; });

  d3.select('#time-series')
    .append('g')
    .append('path')
    .datum(tasks)
    .attr('class', 'line')
    .attr('d', line)
    .call(xAxis);

}

if (Meteor.isClient) {
  Template.dashboard.events({
    'click button': function() {
      draw();
    }
  });
}
