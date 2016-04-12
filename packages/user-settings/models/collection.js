UserSettings = new Mongo.Collection('user-settings');

if (Meteor.isServer) {
  Meteor.publish('user-settings', function() {
    return UserSettings.find({ created_by: this.userId });
  });
}
else if (Meteor.isClient) {
  Meteor.subscribe('user-settings');
}
