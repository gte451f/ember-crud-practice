import Ember from 'ember';

export default Ember.Route.extend({
  notify: Ember.inject.service(),

  model: function(params) {
    return this.store.queryRecord('owner', {user_id: params.owner_id, with: 'accounts'});
  },

  actions: {
    //test error handler
    error: function(err, transition) {
      console.log(err);
      return true;
    },

    /**
     * save a model and deal with validation errors
     * @param model
     *
     */
    save: function(model) {
      var self = this;
      model.save().then(function(data) {
        self.get('notify').success('Owner saved!');
        self.transitionTo('owner.item', model.id);
      }, function(reason) {
        // Bubble up to global error handler
        if (reason && reason.status === 409) {
          // Expected rejection, inform user and swallow error
          this.get('notify').alert('Email address already registered.');
        } else {
          // Bubble up to global error handler
          console.debug(reason);
          throw reason;
        }
      });

    }
  }
});
