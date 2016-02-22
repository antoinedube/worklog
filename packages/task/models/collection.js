Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  Meteor.publish('tasks', function() {
    return Tasks.find();
  });
}
else if (Meteor.isClient) {
  Meteor.subscribe('tasks');
}
