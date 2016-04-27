import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.queryRecord('owner', {user_id: params.owner_id, with: 'accounts'});
  }
});
