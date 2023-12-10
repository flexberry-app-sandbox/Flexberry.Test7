import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestпаспортныеДанныеLForm from './forms/i-i-s-test-паспортные-данные-l';
import IISTestСотрудникиLForm from './forms/i-i-s-test-сотрудники-l';
import IISTestпаспортныеДанныеEForm from './forms/i-i-s-test-паспортные-данные-e';
import IISTestСотрудникиEForm from './forms/i-i-s-test-сотрудники-e';
import IISTestпаспортныеModel from './models/i-i-s-test-паспортные';
import IISTestСотрудникиModel from './models/i-i-s-test-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-паспортные': IISTestпаспортныеModel,
    'i-i-s-test-сотрудники': IISTestСотрудникиModel
  },

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'test',
          title: 'test',
          'i-i-s-test-паспортные-данные-l': {
            caption: 'паспортныеДанныеL',
            title: 'Паспортные данные'
          },
          'i-i-s-test-сотрудники-l': {
            caption: 'СотрудникиL',
            title: 'Сотрудники'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-паспортные-данные-l': IISTestпаспортныеДанныеLForm,
    'i-i-s-test-сотрудники-l': IISTestСотрудникиLForm,
    'i-i-s-test-паспортные-данные-e': IISTestпаспортныеДанныеEForm,
    'i-i-s-test-сотрудники-e': IISTestСотрудникиEForm
  },

});

export default translations;
