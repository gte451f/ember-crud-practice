import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('owner/edit-item', 'Integration | Component | owner/edit item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{owner/edit-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#owner/edit-item}}
      template block text
    {{/owner/edit-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
