import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-test-сотрудники';

import паспортныеModel from './i-i-s-test-паспортные';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-test-паспортные';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = паспортныеModel.extend(СотрудникиMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
