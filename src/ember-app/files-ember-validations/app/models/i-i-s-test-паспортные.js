import {
  defineNamespace,
  defineProjections,
  Model as паспортныеMixin
} from '../mixins/regenerated/models/i-i-s-test-паспортные';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(паспортныеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
