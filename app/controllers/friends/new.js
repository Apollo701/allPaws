import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.name',
    'model.sex',
    'model.age',
    'model.bio',
    'model.breed',
    'model.trained',
    'model.child-friendly',
    'model.animal-friendly',
    'model.spayed-or-neutered',
    function() {
      return !Ember.isEmpty(this.get('model.name')) &&
        !Ember.isEmpty(this.get('model.sex')) &&
        !Ember.isEmpty(this.get('model.age')) &&
        !Ember.isEmpty(this.get('model.bio')) &&
        !Ember.isEmpty(this.get('model.breed')) &&
        !Ember.isEmpty(this.get('model.trained')) &&
        !Ember.isEmpty(this.get('model.child-friendly')) &&
        !Ember.isEmpty(this.get('model.animal-friendly')) &&
        !Ember.isEmpty(this.get('model.spayed-or-neutered'));
    }),
  actions: {
    
  }
});
