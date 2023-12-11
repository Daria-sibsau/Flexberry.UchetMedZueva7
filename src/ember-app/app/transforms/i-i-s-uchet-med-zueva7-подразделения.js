import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПодразделенияEnum from '../enums/i-i-s-uchet-med-zueva7-подразделения';

export default FlexberryEnum.extend({
  enum: ПодразделенияEnum,
  sourceType: 'IIS.UchetMedZueva7.Подразделения'
});
