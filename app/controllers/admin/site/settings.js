import AvailableLocalesMixin from 'momentum-client/mixins/available-locales';

export default Ember.Controller.extend(AvailableLocalesMixin, {

  needs: ['admin']

});