import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-test-паспортные'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-test-сотрудники', {
    наименование: attr('Наименование', { index: 0 }),
    iD: attr('ID', { index: 1 }),
    серия: attr('Серия', { index: 2 }),
    номер: attr('Номер', { index: 3 })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-test-сотрудники', {
    наименование: attr('Наименование', { index: 0 }),
    iD: attr('ID', { index: 1 }),
    серия: attr('Серия', { index: 2 }),
    номер: attr('Номер', { index: 3 })
  });
};
