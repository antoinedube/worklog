UserSettings = new Mongo.Collection('user-settings');

if (Meteor.isServer) {
  Meteor.publish('user-settings', function() {
    if (UserSettings.find({ created_by: this.userId }).count() === 0) {
      UserSettings.insert({
        created_by: this.userId,
        work_categories: [{ 'name': 'default' }]
      });
    }

    return UserSettings.find({ created_by: this.userId });
  });
}
else if (Meteor.isClient) {
  Meteor.subscribe('user-settings');
}
