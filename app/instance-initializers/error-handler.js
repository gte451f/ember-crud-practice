/**
 * insert logic to handle errors gobally
 * primary focus is to create hook where API errors can be dealt with in a consistant way
 * @param appInstance
 */
export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  var notify = appInstance.lookup('service:notify');

  // extra space in case a lot of error handling is needed
  // var errorHelper = appInstance.lookup('service:error-helper');

  // Global error handler including Ember run loop
  // if (Ember.testing !== true) {
  //   Ember.onerror = function(err) {
  //     // notify.alert('error occurred');
  //   };
  // }

  // Global error handler for promises
  Ember.RSVP.on('error', function(err) {
    // print out unexpected errors
    // console.error(err);

    
    // print out api errors
    if (!Ember.isEmpty(err.errors)) {
      err.errors.forEach((error) => {
        notify.alert(error.detail);
      });
    }
  });

}

export default {
  name: 'error-handler',
  initialize
};
