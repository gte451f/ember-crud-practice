import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.query('account', {with: 'owners,account_addrs'});
  }
});
