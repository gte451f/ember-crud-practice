import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  redirect: function() {
    this.transitionTo('main');
  },
  location: config.locationType
});

Router.map(function() {
  this.route('main');
  this.route('books');
  this.route('authors');
});

export default Router;
