import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  серия: DS.attr('number')
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-test-паспортные.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  серия: {
    descriptionKey: 'models.i-i-s-test-паспортные.validations.серия.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('паспортныеДанныеE', 'i-i-s-test-паспортные', {
    серия: attr('Серия', { index: 0 }),
    номер: attr('Номер', { index: 1 })
  });

  modelClass.defineProjection('паспортныеДанныеL', 'i-i-s-test-паспортные', {
    серия: attr('Серия', { index: 0 }),
    номер: attr('Номер', { index: 1 })
  });
};
