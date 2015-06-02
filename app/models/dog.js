import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  breed: DS.attr('string'),
  age: DS.attr('number'),
  size: DS.attr('string'),
  trained: DS.attr('boolean'),
  animalFriendly: DS.attr('boolean'),
  childFriendly: DS.attr('boolean'),
  bio: DS.attr(),
  sex: DS.attr('string'),
  spayedOrNeutered: DS.attr('boolean'),
  photo: DS.attr('string')
});
