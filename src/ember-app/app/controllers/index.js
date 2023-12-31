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
          caption: i18n.t('forms.application.sitemap.формирование-документов.caption'),
          title: i18n.t('forms.application.sitemap.формирование-документов.title'),
          children: [{
            link: 'i-i-s-uchet-med-zueva7-список-на-медосм-l',
            caption: i18n.t('forms.application.sitemap.формирование-документов.i-i-s-uchet-med-zueva7-список-на-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.формирование-документов.i-i-s-uchet-med-zueva7-список-на-медосм-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva7-инд-напр-медосм-l',
            caption: i18n.t('forms.application.sitemap.формирование-документов.i-i-s-uchet-med-zueva7-инд-напр-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.формирование-документов.i-i-s-uchet-med-zueva7-инд-напр-медосм-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.caption'),
          title: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.title'),
          children: [{
            link: 'i-i-s-uchet-med-zueva7-должности-l',
            caption: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.i-i-s-uchet-med-zueva7-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.i-i-s-uchet-med-zueva7-должности-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva7-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.i-i-s-uchet-med-zueva7-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.i-i-s-uchet-med-zueva7-сотрудники-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva7-организации-l',
            caption: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.i-i-s-uchet-med-zueva7-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.организация-и-штат-сотрудников.i-i-s-uchet-med-zueva7-организации-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.производственная-информация.caption'),
          title: i18n.t('forms.application.sitemap.производственная-информация.title'),
          children: [{
            link: 'i-i-s-uchet-med-zueva7-приказ-м-з-р-l',
            caption: i18n.t('forms.application.sitemap.производственная-информация.i-i-s-uchet-med-zueva7-приказ-м-з-р-l.caption'),
            title: i18n.t('forms.application.sitemap.производственная-информация.i-i-s-uchet-med-zueva7-приказ-м-з-р-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-uchet-med-zueva7-класс-вред-фактор-l',
            caption: i18n.t('forms.application.sitemap.производственная-информация.i-i-s-uchet-med-zueva7-класс-вред-фактор-l.caption'),
            title: i18n.t('forms.application.sitemap.производственная-информация.i-i-s-uchet-med-zueva7-класс-вред-фактор-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})