import { Serializer as паспортныеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-паспортные';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(паспортныеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
