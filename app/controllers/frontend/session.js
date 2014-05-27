export default Ember.Controller.extend({

  //-- Properties -----------------------------------------------------------

  credentials: function() {
    return {
      email: this.get('email'),
      password: this.get('password'),
      remember_me: this.get('remember_me')
    };
  }.property('email', 'password', 'rememberMe'),

});