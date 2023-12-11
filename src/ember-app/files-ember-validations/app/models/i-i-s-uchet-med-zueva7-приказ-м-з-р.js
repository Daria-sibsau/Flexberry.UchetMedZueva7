import {
  defineNamespace,
  defineProjections,
  Model as ПриказМЗРMixin
} from '../mixins/regenerated/models/i-i-s-uchet-med-zueva7-приказ-м-з-р';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриказМЗРMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
