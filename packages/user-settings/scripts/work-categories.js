if (Meteor.isClient) {
  Template.work_categories.helpers({
    categories: function() {
      return UserSettings.find({});
    }
  });
}
