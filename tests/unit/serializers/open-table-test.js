import { moduleForModel, test } from 'ember-qunit';

moduleForModel('open-table', 'Unit | Serializer | open table', {
  // Specify the other units that are required for this test.
  needs: ['serializer:open-table']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
