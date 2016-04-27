import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.queryRecord('account', {id: params.account_id, with: 'owners,account_addrs'});
  }
});
