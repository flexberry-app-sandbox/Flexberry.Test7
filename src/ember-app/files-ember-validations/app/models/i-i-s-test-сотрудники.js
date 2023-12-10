import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-test-сотрудники';

import паспортныеModel from './i-i-s-test-паспортные';

let Model = паспортныеModel.extend(СотрудникиMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
