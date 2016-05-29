import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.queryRecord('owner', {id: params.owner_id, with: 'accounts'});
  },
  setupController: function(controller, resolved) {
    var model = resolved.get('firstObject');
    this._super(controller, model);
  }
});
