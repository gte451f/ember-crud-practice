import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.queryRecord('account', {id: 1, with: 'owners,account_addrs'});
  },

  setupController: function(controller, resolved) {
    var model = resolved.get('firstObject');
    this._super(controller, model);
  }


});
