import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолСотрудникаEnum from '../enums/i-i-s-uchet-med-zueva7-пол-сотрудника';

export default FlexberryEnum.extend({
  enum: ПолСотрудникаEnum,
  sourceType: 'IIS.UchetMedZueva7.ПолСотрудника'
});
