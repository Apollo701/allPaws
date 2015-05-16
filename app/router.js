import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dogs', function() {
    this.route('new');
    this.route('show', { path: ':dog_id' });
  });
  this.route('aboutUs');
});

export default Router;
