if (Meteor.isServer) {
  Workdays = new Mongo.Collection('workdays');
  Workdays.attachSchema(new SimpleSchema({
    date: {
      type: Date,
      label: "Date"
    },
    tasks: {
      type: [String]
    }
  }));

  Meteor.publish('workdays', function() {
    return Workdays.find();
  });
}
else if (Meteor.isClient) {
  Workdays = new Mongo.Collection('workdays');
  Meteor.subscribe('workdays');
}
