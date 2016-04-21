import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  redirect: function () {
    this.transitionTo('main');
  },
  location: config.locationType
});

Router.map(function () {
  this.route('main');
  this.route('books', function() {
    this.route('item', { path: '/item/:book_id' });
  });
  this.route('authors', function () {
    this.route('item', { path: '/item/:author_id' });
    this.route('edit');
    this.route('add');
  });
});

export default Router;
