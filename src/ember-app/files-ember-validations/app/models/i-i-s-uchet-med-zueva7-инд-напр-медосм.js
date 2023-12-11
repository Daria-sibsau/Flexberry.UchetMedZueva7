import {
  defineNamespace,
  defineProjections,
  Model as ИндНапрМедосмMixin
} from '../mixins/regenerated/models/i-i-s-uchet-med-zueva7-инд-напр-медосм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИндНапрМедосмMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
