export const name = 'scripts/user-settings';

if (Meteor.isClient) {
  Template.user_settings.helpers({
    work_categories: function() {
      return UserSettings.findOne({}, { work_categories: 1 }); // eslint-disable-line no-undef
    }
  });

  Template.user_settings.events({
    'submit #new-work-category': function(event) {
      event.preventDefault();
      var category_name = event.target.work_category.value;

      if (category_name === '') return;

      var settings_id = UserSettings.findOne({}, { _id: 1 });
      console.log('id: ', settings_id);
      /*
      UserSettings.update( // eslint-disable-line no-undef
        {},
        {
          $push: {
            work_categories: category_name
          }
        }
      );
      */
    }
  });
}
