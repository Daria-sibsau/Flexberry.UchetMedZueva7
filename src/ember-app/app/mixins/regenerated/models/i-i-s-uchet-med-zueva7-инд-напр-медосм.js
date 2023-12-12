import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  медУчреждение: DS.attr('string'),
  номер: DS.attr('number'),
  организации: DS.belongsTo('i-i-s-uchet-med-zueva7-организации', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-uchet-med-zueva7-сотрудники', { inverse: null, async: false }),
  вреднФактПроиз: DS.hasMany('i-i-s-uchet-med-zueva7-вредн-факт-произ', { inverse: 'индНапрМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-инд-напр-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  медУчреждение: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-инд-напр-медосм.validations.медУчреждение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-инд-напр-медосм.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-инд-напр-медосм.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-инд-напр-медосм.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вреднФактПроиз: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-инд-напр-медосм.validations.вреднФактПроиз.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИндНапрМедосмE', 'i-i-s-uchet-med-zueva7-инд-напр-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    организации: belongsTo('i-i-s-uchet-med-zueva7-организации', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 2, hidden: true })
    }, { index: -1, hidden: true }),
    медУчреждение: attr('Медицинское учреждение', { index: 3 }),
    сотрудники: belongsTo('i-i-s-uchet-med-zueva7-сотрудники', 'Фамилия сотрудника', {
      фамилия: attr('Фамилия сотрудника', { index: 4, hidden: true }),
      имя: attr('Имя сотрудника', { index: 5 }),
      отчество: attr('Отчество сотрудника', { index: 6 }),
      датаРождения: attr('Дата рождения', { index: 7 }),
      должности: belongsTo('i-i-s-uchet-med-zueva7-должности', '', {
        наименование: attr('Должность', { index: 8 }),
        подразделение: attr('Подразделение', { index: 9 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    вреднФактПроиз: hasMany('i-i-s-uchet-med-zueva7-вредн-факт-произ', 'Вредные факторы производства', {
      номер: attr('Номер пункта', { index: 0 }),
      классВредФактор: belongsTo('i-i-s-uchet-med-zueva7-класс-вред-фактор', 'Номер', {
        номер: attr('Номер', { index: 1 }),
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('ИндНапрМедосмL', 'i-i-s-uchet-med-zueva7-инд-напр-медосм', {
    номер: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    медУчреждение: attr('Медицинское учреждение', { index: 2 }),
    сотрудники: belongsTo('i-i-s-uchet-med-zueva7-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-uchet-med-zueva7-организации', 'Наименование организации', {
      наименование: attr('Наименование организации', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
