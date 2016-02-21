if (Meteor.isServer) {
  Tasks = new Mongo.Collection('tasks');

  Meteor.publish('tasks', function() {
    return Tasks.find();
  });
}
else if (Meteor.isClient) {
  Tasks = new Mongo.Collection('tasks');
  Meteor.subscribe('tasks');
}
