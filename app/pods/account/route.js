import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.findAll('account', {with: 'account_addrs'});
  }
});