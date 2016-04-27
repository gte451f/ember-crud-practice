import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('owner/owner-list', 'Integration | Component | owner/owner list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{owner/owner-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#owner/owner-list}}
      template block text
    {{/owner/owner-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
