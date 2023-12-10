import { Serializer as СотрудникиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-сотрудники';
import паспортныеSerializer from './i-i-s-test-паспортные';

export default паспортныеSerializer.extend(СотрудникиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
