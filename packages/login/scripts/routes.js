var is_signed_in = function () {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
  } else {
    this.next();
  }
};

Router.onBeforeAction(is_signed_in, {except: ['login']});

var redirect_after_login = function () {
  if (Meteor.user()) {
    Router.go('/tasks_list');
  } else {
    this.next();
  }
};

Router.onBeforeAction(redirect_after_login, {only: ['login']});

Router.route('/login', {
  template: 'login'
});
