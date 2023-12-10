import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-паспортные-данные-l': IISTestпаспортныеДанныеLForm,
    'i-i-s-test-сотрудники-l': IISTestСотрудникиLForm,
    'i-i-s-test-паспортные-данные-e': IISTestпаспортныеДанныеEForm,
    'i-i-s-test-сотрудники-e': IISTestСотрудникиEForm
  },

});

export default translations;
