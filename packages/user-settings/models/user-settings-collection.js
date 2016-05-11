UserSettings = new Mongo.Collection('user-settings');

if (Meteor.isServer) {
  Meteor.publish('user-settings', function() {
    // Find or create, and return document
    return UserSettings.find({ created_by: this.userId });
  });
}
else if (Meteor.isClient) {
  Meteor.subscribe('user-settings');
}
