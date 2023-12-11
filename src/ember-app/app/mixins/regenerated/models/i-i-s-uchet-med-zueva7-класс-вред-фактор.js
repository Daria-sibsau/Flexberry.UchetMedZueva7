import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  номер: DS.attr('number')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-класс-вред-фактор.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-класс-вред-фактор.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассВредФакторE', 'i-i-s-uchet-med-zueva7-класс-вред-фактор', {
    номер: attr('Номер', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('КлассВредФакторL', 'i-i-s-uchet-med-zueva7-класс-вред-фактор', {
    номер: attr('Номер', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
