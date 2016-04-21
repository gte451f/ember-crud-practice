import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),

  books: DS.hasMany('book', {
    async: true
  })
});
