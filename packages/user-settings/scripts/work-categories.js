if (Meteor.isClient) {
  Template.work_categories.helpers({
    work_categories: function() {
      return UserSettings.find({}).WorkCategories;
      // return WorkCategories.find({});
    }
  });

  Template.work_categories.events({
    'submit #new-work-category': function() {
      event.preventDefault();
      var category_name = event.target.work_category.value;

      if (category_name === "") return;

      /*
      WorkCategories.insert({
        name: category_name,
        created_by: Meteor.userId()
      });
      */
      event.target.reset();
    },
    'click .remove-action': function() {
      event.preventDefault();
      // WorkCategories.remove(this._id);
    }
  });
}
