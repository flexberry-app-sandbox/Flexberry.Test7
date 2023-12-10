import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test.caption'),
          title: i18n.t('forms.application.sitemap.test.title'),
          children: [{
            link: 'i-i-s-test-паспортные-данные-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-паспортные-данные-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-паспортные-данные-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-test-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-сотрудники-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})