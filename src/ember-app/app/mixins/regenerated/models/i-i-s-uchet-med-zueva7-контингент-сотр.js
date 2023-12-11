import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всего: DS.attr('number'),
  до21Года: DS.attr('number'),
  женщины: DS.attr('number'),
  мужчины: DS.attr('number'),
  периодичность: DS.attr('i-i-s-uchet-med-zueva7-период-мед'),
  подразделение: DS.attr('i-i-s-uchet-med-zueva7-подразделения'),
  классВредФактор: DS.belongsTo('i-i-s-uchet-med-zueva7-класс-вред-фактор', { inverse: null, async: false }),
  приказМЗР: DS.belongsTo('i-i-s-uchet-med-zueva7-приказ-м-з-р', { inverse: null, async: false }),
  списокНаМедосм: DS.belongsTo('i-i-s-uchet-med-zueva7-список-на-медосм', { inverse: 'контингентСотр', async: false })
});

export let ValidationRules = {
  всего: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.всего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  до21Года: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.до21Года.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  женщины: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.женщины.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  мужчины: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.мужчины.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  периодичность: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.периодичность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подразделение: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.подразделение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классВредФактор: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.классВредФактор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  приказМЗР: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.приказМЗР.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокНаМедосм: {
    descriptionKey: 'models.i-i-s-uchet-med-zueva7-контингент-сотр.validations.списокНаМедосм.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтингентСотрE', 'i-i-s-uchet-med-zueva7-контингент-сотр', {
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
  });
};
