import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-uchet-med-zueva7-сотрудники', { inverse: null, async: false }),
  контингентСотр: DS.hasMany('i-i-s-uchet-med-zueva7-контингент-сотр', { inverse: 'списокНаМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-список-на-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-список-на-медосм.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-список-на-медосм.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контингентСотр: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-список-на-медосм.validations.контингентСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокНаМедосмE', 'i-i-s-uchet-med-zueva7-список-на-медосм', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сотрудники: belongsTo('i-i-s-uchet-med-zueva7-сотрудники', 'Фамилия ОЛ', {
      фамилия: attr('Фамилия ОЛ', { index: 2 }),
      имя: attr('Имя ОЛ', { index: 3 }),
      отчество: attr('Отчество ОЛ', { index: 4 }),
      должности: belongsTo('i-i-s-uchet-med-zueva7-должности', '', {
        наименование: attr('Должность', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    контингентСотр: hasMany('i-i-s-uchet-med-zueva7-контингент-сотр', 'Контингент сотрудников', {
      подразделение: attr('Подразделение', { index: 0 }),
      мужчины: attr('Мужчины', { index: 1 }),
      женщины: attr('Женщины', { index: 2 }),
      до21Года: attr('До 21 года', { index: 3 }),
      всего: attr('Всего', { index: 4 }),
      классВредФактор: belongsTo('i-i-s-uchet-med-zueva7-класс-вред-фактор', 'Фактор производства', {
        наименование: attr('Фактор производства', { index: 5, hidden: true })
      }, { index: -1, hidden: true }),
      периодичность: attr('Периодичность', { index: 6 }),
      приказМЗР: belongsTo('i-i-s-uchet-med-zueva7-приказ-м-з-р', 'Пункт приказа МЗР', {
        номерПункта: attr('Пункт приказа МЗР', { index: 7, hidden: true })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('СписокНаМедосмL', 'i-i-s-uchet-med-zueva7-список-на-медосм', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сотрудники: belongsTo('i-i-s-uchet-med-zueva7-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
