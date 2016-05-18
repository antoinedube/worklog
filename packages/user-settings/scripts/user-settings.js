export const name = 'scripts/user-settings';

if (Meteor.isClient) {

  Template.user_settings.helpers({
    work_categories: function() {
      var user_settings = UserSettings.findOne({});
      if (user_settings) {
        return user_settings.work_categories;
      }
    }
  });

  Template.user_settings.events({
    'submit #new-work-category': function(event) {
      event.preventDefault();
      var category_name = event.target.work_category.value;

      if (category_name === '') return;

      var settings = UserSettings.findOne({});
      var id = settings._id;
      UserSettings.update(
        { _id: id },
        {
          $push: {
            work_categories: {
              'name': category_name
            }
          }
        }
      );

      event.target.reset();
    },
    'click .remove-item': function(event) {
      event.preventDefault();
      var settings = UserSettings.findOne({});
      var id = settings._id;
      UserSettings.update(
        { _id: id },
        {
          $pull: {
            work_categories: { name: this.name }
          }
        }
      )
    }
  });
}
