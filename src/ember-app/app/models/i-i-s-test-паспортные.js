import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as паспортныеMixin
} from '../mixins/regenerated/models/i-i-s-test-паспортные';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(паспортныеMixin, Validations, {
});

defineProjections(Model);

export default Model;
