if (Meteor.isClient) {
  Template.registration.events({
    'submit #registration': function(event) {
      event.preventDefault();

      var email = event.target.email.value;
      var password = event.target.password.value;
      var password_confirmation = event.target.passwordconfirmation.value;

      if (password !== password_confirmation) {
        toastr.error('Passwords are different', 'Error', { timeOut: 2000 });
        event.target.reset();
        return;
      }

      Accounts.createUser({
        email: email,
        password: password
      }, function(error) {
        if (error) {
          toastr.error(error, 'Registration error');
        }
        else {
          Router.go('/workday');
        }
      });
    }
  });
}
