export default {
  name: 'bodyClass',
  initialize: function() {
    Ember.Route.reopen({
      rootElement: 'body',
      activate: function() {
        var cssClass = this.toCssClass();
        if (cssClass !== 'application') {
          Ember.$(this.get('rootElement')).addClass(cssClass);
        }
      },
      deactivate: function() {
        Ember.$(this.get('rootElement')).removeClass(this.toCssClass());
      },
      toCssClass: function() {
        return this.routeName.replace(/\./g, '-').dasherize();
      }
    });
  }
};