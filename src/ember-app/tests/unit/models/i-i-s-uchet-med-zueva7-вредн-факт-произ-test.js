import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-med-zueva7-вредн-факт-произ', 'Unit | Model | i-i-s-uchet-med-zueva7-вредн-факт-произ', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
