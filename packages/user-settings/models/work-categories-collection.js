WorkCategories = new Mongo.Collection('work-categories');

if (Meteor.isServer) {
  Meteor.publish('work-categories', function() {
    return WorkCategories.find({ created_by: this.userId });
  });
}
else if (Meteor.isClient) {
  Meteor.subscribe('work-categories');
}
