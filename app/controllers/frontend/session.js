export default Ember.Controller.extend({

  //-- Properties -----------------------------------------------------------

  loginButtonValue: function() {
    if (this.get('isLoading')) {
      return 'Authenticating...';
    }else{
      return 'Login';
    }
  }.property('isLoading'),

  credentials: function() {
    return {
      email: this.get('email'),
      password: this.get('password'),
      remember_me: this.get('remember_me')
    };
  }.property('email', 'password', 'rememberMe'),

});