Router.route('/dashboard', {
  template: 'dashboard'
});

function formatDuration(duration) {
  var hours = _.parseInt(duration/3600000);
  var minutes = _.parseInt(duration/60000) - hours*60;

  var formatted_duration = '';
  formatted_duration += hours > 0 ? hours + 'h' : '';
  formatted_duration += hours > 0 && minutes > 0 ? ' ' : '';
  formatted_duration += minutes > 0 ? minutes + 'm' : '';

  return formatted_duration;
}

function draw() {

  var minDate = new Date();
  minDate.setMonth(minDate.getMonth()-1);
  var maxDate = new Date();

  var tasks = Tasks.find({
    begin_time: {
      '$gt': minDate,
      '$lte': maxDate
    }
  }).fetch();

  var minDuration = _.minBy(tasks, function(t) { return t.duration; }).duration;
  minDuration *= 0.9;
  var maxDuration = _.maxBy(tasks, function(t) { return t.duration; }).duration;
  maxDuration *= 1.1;

  var margin = { top: 100, right: 100, bottom: 100, left: 100 };
  var width = 1300 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  var x = d3.time.scale()
                 .domain([minDate, maxDate])
                 .range([0,width]);

  var y = d3.scale.linear()
                  .domain([minDuration, maxDuration])
                  .range([height,0]);

  var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom')
                .tickFormat(function(d) {
                  return d3.time.format('%b %d')(d);
                });

  var yAxis = d3.svg.axis()
                .scale(y)
                .orient('left')
                .tickFormat(function (d) { return formatDuration(d); });

  var graph = d3.select('#time-series')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  graph.append('g')
       .attr('class', 'x axis')
       .attr('transform', 'translate(0,' + height + ')')
       .call(xAxis)
       .selectAll('text')
       .attr('transform', 'translate(25,20) rotate(45)');

  graph.append('g')
       .attr('class', 'y axis')
       .call(yAxis);

  var line = d3.svg
               .line()
               .x(function (d) { return x(d.begin_time); })
               .y(function (d) { return y(d.duration); });

  var lineColors = ['#f44336', '#3f51b5', '#4caf50', '#ff9800', '#607d8b'];
  var categories = UserSettings.findOne().work_categories;
  var index = 0;
  _(categories).forEach(function(category) {
    var filteredTasks = _.orderBy(
                          _.filter(tasks, function(task) {
                            return task.type === category.name;
                          }),
                          'begin_time'
                        );

    graph.append('path')
         .datum(filteredTasks)
         .attr('class', 'line')
         .attr('d', line)
         .attr('stroke', lineColors[index]);

    index++;
  });

}

if (Meteor.isClient) {
  Template.dashboard.events({
    'click button': function() {
      draw();
    }
  });
}
