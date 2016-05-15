import Ember from 'ember';

export default Ember.Service.extend({

  title: null,
  detail: null,
  meta: null,
  validationList: [],

  /**
   * the error handling api has shifted before
   * this function will pull error related data from a given model and EXTRA normalize it for our api
   * so the rest of the mixin can pull the data it needs for display
   * @param model
   */
  loadError(model){
    var errors = model.errors;
    var self = this;
    // here is a direct way to access the title.message
    // var title = model.get('errors.title')[0].message;

    // list of validation messages if any
    var validationList = [];

    // Internal error variables
    ['title', 'detail', 'meta', 'code', 'status'].forEach(function(name) {
      var message = errors.errorsFor(name);
      if (Ember.isPresent(message)) {
        self.set(name, message.get('firstObject.message'));
      }
    });

    model.eachAttribute(function(name) {
      var message = errors.errorsFor(name);
      if (Ember.isPresent(message)) {
        validationList.pushObject({
          attribute: name,
          message: message.get('firstObject.message')
        });
      }
    });

    this.set('validationList', validationList);
  },

  /**
   * report toaster with title and validation messages
   * @param model
   */
  validationReport(model) {
    this.loadError(model);
    if (!model.get('isNew')) {
      model.rollbackAttributes();
    }
    var errorHTML = '<h5>' + this.get('title') + '</h5>';
    var validationList = this.get('validationList');
    if (validationList.length > 0) {
      errorHTML = errorHTML.concat('<ul>');
      validationList.forEach(function (item) {
        errorHTML = errorHTML.concat('<li>' + item.message + '</li>');
      });
      errorHTML = errorHTML.concat('</ul>');
    }
    this.get('notify').alert({html: errorHTML});
  },

});
