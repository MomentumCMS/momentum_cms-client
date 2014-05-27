export default {
  name: 'eashFormHacks',
  initialize: function() {

    Ember.EasyForm.Input.reopen({
      errorsChanged: function() {
        this.set('hasFocusedOut', true);
        this.showValidationError();
      },
      didInsertElement: function() {
        this.addObserver('context.errors' + this.property + '.@each', this, 'errorsChanged');
      }
    });

    Ember.EasyForm.Error.reopen({
      errorText: function() {
        return this.get('errors.firstObject.message');
      }.property('errors.firstObject.message', 'errors.firstObject').cacheable()
    });

    Ember.EasyForm.Submit.reopen({
      disabled: function() {
        return this.get('formForModel.disableSubmit');
      }.property('formForModel.disableSubmit')
    });

  }
};