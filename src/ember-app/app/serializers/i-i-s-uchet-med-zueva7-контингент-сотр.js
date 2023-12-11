import { Serializer as КонтингентСотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-med-zueva7-контингент-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтингентСотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
