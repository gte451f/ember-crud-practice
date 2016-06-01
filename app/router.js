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

  this.route('owner', function() {
    this.route('add');
    this.route('edit', {path: '/:id/edit'});
    this.route('item', {path: '/:owner_id'});
  });

  this.route('account', function() {
    this.route('edit');
    this.route('item', {path: '/:account_id'});
    this.route('add');
  });
  this.route('test');
});

export default Router;
