import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  наименование: DS.attr('string'),
  подразделение: DS.attr('i-i-s-uchet-med-zueva7-подразделения')
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-должности.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-должности.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-uchet-med-zueva7-должности', {
    iDДолжности: attr('ID должности', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    подразделение: attr('Подразделение', { index: 2 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-uchet-med-zueva7-должности', {
    iDДолжности: attr('ID должности', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    подразделение: attr('Подразделение', { index: 2 })
  });
};
