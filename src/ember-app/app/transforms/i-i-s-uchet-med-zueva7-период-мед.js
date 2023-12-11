import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПериодМедEnum from '../enums/i-i-s-uchet-med-zueva7-период-мед';

export default FlexberryEnum.extend({
  enum: ПериодМедEnum,
  sourceType: 'IIS.UchetMedZueva7.ПериодМед'
});
