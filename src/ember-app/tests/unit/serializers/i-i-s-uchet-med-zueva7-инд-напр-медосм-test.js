import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-med-zueva7-инд-напр-медосм', 'Unit | Serializer | i-i-s-uchet-med-zueva7-инд-напр-медосм', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-uchet-med-zueva7-инд-напр-медосм',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-uchet-med-zueva7-период-мед',
    'transform:i-i-s-uchet-med-zueva7-подразделения',
    'transform:i-i-s-uchet-med-zueva7-пол-сотрудника',

    'model:i-i-s-uchet-med-zueva7-вредн-факт-произ',
    'model:i-i-s-uchet-med-zueva7-должности',
    'model:i-i-s-uchet-med-zueva7-инд-напр-медосм',
    'model:i-i-s-uchet-med-zueva7-класс-вред-фактор',
    'model:i-i-s-uchet-med-zueva7-контингент-сотр',
    'model:i-i-s-uchet-med-zueva7-организации',
    'model:i-i-s-uchet-med-zueva7-приказ-м-з-р',
    'model:i-i-s-uchet-med-zueva7-сотрудники',
    'model:i-i-s-uchet-med-zueva7-список-на-медосм',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
