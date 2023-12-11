import { Serializer as ИндНапрМедосмSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-med-zueva7-инд-напр-медосм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИндНапрМедосмSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
