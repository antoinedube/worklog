if (Meteor.isServer) {
  Tasks = new Mongo.Collection('tasks');
  Tasks.attachSchema(new SimpleSchema({
    begin_time: {
      type: Date
    },
    end_time: {
      type: Date
    },
    issue: {
      type: String
    }
  }));

  Meteor.publish('tasks', function() {
    return Tasks.find();
  });
}
else if (Meteor.isClient) {
  Tasks = new Mongo.Collection('tasks');
  Meteor.subscribe('tasks');
}
