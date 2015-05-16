import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.name',
    'model.sex',
    'model.age',
    'model.bio',
    'model.breed',
    function() {
      return !Ember.isEmpty(this.get('model.name')) &&
        !Ember.isEmpty(this.get('model.sex')) &&
        !Ember.isEmpty(this.get('model.age')) &&
        !Ember.isEmpty(this.get('model.bio')) &&
        !Ember.isEmpty(this.get('model.breed'));
    }),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(dog) {
          _this.transitionToRoute('dogs.show', dog);
        });
      } else {
        this.set('errorMessage', 'You must fill in every field!');
      }

      return false;
    },
    cancel: function() {
      this.transitionToRoute('dogs');

      return false;
    }
  }
});
