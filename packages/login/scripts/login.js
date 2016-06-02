if (Meteor.isClient) {
  Template.login.events({
    'submit #sign-in': function(event) {
      event.preventDefault();

      var email = event.target.email.value;
      var password = event.target.password.value;

      Meteor.loginWithPassword(email, password, function(error) {
        if (error) {
          toastr.error(error.reason, 'Error');
          event.target.reset();
        }
        else {
          Router.go('/workday');
        }
      });
    }
  });
}
