var is_signed_in = function () {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
  } else {
    this.next();
  }
};

Router.onBeforeAction(is_signed_in, {except: ['login', 'register']});

var redirect_after_login = function () {
  if (Meteor.user()) {
    Router.go('/workday');
  } else {
    this.next();
  }
};

Router.onBeforeAction(redirect_after_login, {only: ['login', 'register']});

Router.route('/login', {
  template: 'login'
});
