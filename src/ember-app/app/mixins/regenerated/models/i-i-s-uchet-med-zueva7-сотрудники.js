import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  имя: DS.attr('string'),
  номер: DS.attr('number'),
  номерПаспорта: DS.attr('number'),
  отчество: DS.attr('string'),
  пол: DS.attr('i-i-s-uchet-med-zueva7-пол-сотрудника'),
  серияПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-uchet-med-zueva7-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-uchet-med-zueva7-сотрудники', {
    номер: attr('Номер', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    датаРождения: attr('Дата рождения', { index: 4 }),
    серияПаспорта: attr('Серия паспорта', { index: 5 }),
    номерПаспорта: attr('Номер паспорта', { index: 6 }),
    пол: attr('Пол', { index: 7 }),
    телефон: attr('Телефон', { index: 8 }),
    должности: belongsTo('i-i-s-uchet-med-zueva7-должности', '', {
      iDДолжности: attr('', { index: 9 }),
      наименование: attr('Должность', { index: 10, hidden: true }),
      подразделение: attr('Подразделение', { index: 11 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-uchet-med-zueva7-сотрудники', {
    номер: attr('Номер', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    датаРождения: attr('Дата рождения', { index: 4 }),
    серияПаспорта: attr('Серия паспорта', { index: 5 }),
    номерПаспорта: attr('Номер паспорта', { index: 6 }),
    пол: attr('Пол', { index: 7 }),
    телефон: attr('Телефон', { index: 8 }),
    должности: belongsTo('i-i-s-uchet-med-zueva7-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
