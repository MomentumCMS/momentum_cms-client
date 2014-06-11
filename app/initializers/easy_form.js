import easyFormMultiSelect2View from 'momentum-client/views/easyForm/multi-select2';
import easyFormDefaultLocaleSelect from 'momentum-client/views/easyForm/default-locale-select';

export default {
  name: 'easyForm',
  initialize: function() {

    //-- Custom Elements ----------------------------------------------------
    Ember.EasyForm.Config.registerInputType('multi-select2', easyFormMultiSelect2View);
    Ember.EasyForm.Config.registerInputType('default-locale-select', easyFormDefaultLocaleSelect);

    Ember.EasyForm.Input.reopen({
      // https://github.com/dockyard/ember-easyForm/issues/118
      bindableInputOptions: [
        'accept', 'align', 'alt', 'autocomplete', 'autofocus',
        'checked', 'disabled', 'form', 'formaction', 'formenctype',
        'formmethod', 'formnovalidate', 'formtarget', 'height', 'list',
        'max', 'maxlength', 'min', 'multiple', 'pattern', 'placeholder',
        'prompt', 'readonly', 'required', 'size', 'src', 'step', 'width', 'content'
      ],
      errorsChanged: function() {
        this.set('hasFocusedOut', true);
        this.showValidationError();
      },
      classNameBindings: ['wrapperConfig.inputClass', 'wrapperErrorClass'],
      didInsertElement: function() {
        this.addObserver('context.errors' + this.property + '.@each', this, 'errorsChanged');
      }
    });

    Ember.EasyForm.Error.reopen({
      errorText: function() {
        return this.get('errors.firstObject.message');
      }.property('errors.firstObject.message', 'errors.firstObject').cacheable(),
      updateParentView: function() {
        var parentView = this.get('parentView');
        if(this.get('errors.length') > 0) {
          parentView.set('wrapperErrorClass', 'has-error');
        }else{
          parentView.set('wrapperErrorClass', false);
        }
      }.observes('errors.firstObject.message', 'errors.firstObject')
    });

    Ember.EasyForm.Submit.reopen({
      disabled: function() {
        return this.get('formForModel.disableSubmit');
      }.property('formForModel.disableSubmit')
    });

    //-- Bootstrap 3 Class Names --------------------------------------------
    //-- https://github.com/dockyard/ember-easyForm/issues/47
    //-- https://github.com/dockyard/ember-easyForm/issues/139

    Ember.TextSupport.reopen({
      classNames: ['form-control']
    });

    Ember.EasyForm.Config.registerWrapper('default', {
      inputTemplate: 'form-fields/input',
      baseViewClassNameBinding: false,
      labelClass: 'control-label',
      inputClass: 'form-group',
      buttonClass: 'btn btn-primary',
      fieldErrorClass: 'has-error',
      errorClass: 'help-block'
    });

  }
};