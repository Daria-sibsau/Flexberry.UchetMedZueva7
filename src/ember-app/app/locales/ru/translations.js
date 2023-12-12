import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISUchetMedZueva7ДолжностиLForm from './forms/i-i-s-uchet-med-zueva7-должности-l';
import IISUchetMedZueva7ИндНапрМедосмLForm from './forms/i-i-s-uchet-med-zueva7-инд-напр-медосм-l';
import IISUchetMedZueva7КлассВредФакторLForm from './forms/i-i-s-uchet-med-zueva7-класс-вред-фактор-l';
import IISUchetMedZueva7ОрганизацииLForm from './forms/i-i-s-uchet-med-zueva7-организации-l';
import IISUchetMedZueva7ПриказМЗРLForm from './forms/i-i-s-uchet-med-zueva7-приказ-м-з-р-l';
import IISUchetMedZueva7СотрудникиLForm from './forms/i-i-s-uchet-med-zueva7-сотрудники-l';
import IISUchetMedZueva7СписокНаМедосмLForm from './forms/i-i-s-uchet-med-zueva7-список-на-медосм-l';
import IISUchetMedZueva7ДолжностиEForm from './forms/i-i-s-uchet-med-zueva7-должности-e';
import IISUchetMedZueva7ИндНапрМедосмEForm from './forms/i-i-s-uchet-med-zueva7-инд-напр-медосм-e';
import IISUchetMedZueva7КлассВредФакторEForm from './forms/i-i-s-uchet-med-zueva7-класс-вред-фактор-e';
import IISUchetMedZueva7ОрганизацииEForm from './forms/i-i-s-uchet-med-zueva7-организации-e';
import IISUchetMedZueva7ПриказМЗРEForm from './forms/i-i-s-uchet-med-zueva7-приказ-м-з-р-e';
import IISUchetMedZueva7СотрудникиEForm from './forms/i-i-s-uchet-med-zueva7-сотрудники-e';
import IISUchetMedZueva7СписокНаМедосмEForm from './forms/i-i-s-uchet-med-zueva7-список-на-медосм-e';
import IISUchetMedZueva7ВреднФактПроизModel from './models/i-i-s-uchet-med-zueva7-вредн-факт-произ';
import IISUchetMedZueva7ДолжностиModel from './models/i-i-s-uchet-med-zueva7-должности';
import IISUchetMedZueva7ИндНапрМедосмModel from './models/i-i-s-uchet-med-zueva7-инд-напр-медосм';
import IISUchetMedZueva7КлассВредФакторModel from './models/i-i-s-uchet-med-zueva7-класс-вред-фактор';
import IISUchetMedZueva7КонтингентСотрModel from './models/i-i-s-uchet-med-zueva7-контингент-сотр';
import IISUchetMedZueva7ОрганизацииModel from './models/i-i-s-uchet-med-zueva7-организации';
import IISUchetMedZueva7ПриказМЗРModel from './models/i-i-s-uchet-med-zueva7-приказ-м-з-р';
import IISUchetMedZueva7СотрудникиModel from './models/i-i-s-uchet-med-zueva7-сотрудники';
import IISUchetMedZueva7СписокНаМедосмModel from './models/i-i-s-uchet-med-zueva7-список-на-медосм';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-uchet-med-zueva7-вредн-факт-произ': IISUchetMedZueva7ВреднФактПроизModel,
    'i-i-s-uchet-med-zueva7-должности': IISUchetMedZueva7ДолжностиModel,
    'i-i-s-uchet-med-zueva7-инд-напр-медосм': IISUchetMedZueva7ИндНапрМедосмModel,
    'i-i-s-uchet-med-zueva7-класс-вред-фактор': IISUchetMedZueva7КлассВредФакторModel,
    'i-i-s-uchet-med-zueva7-контингент-сотр': IISUchetMedZueva7КонтингентСотрModel,
    'i-i-s-uchet-med-zueva7-организации': IISUchetMedZueva7ОрганизацииModel,
    'i-i-s-uchet-med-zueva7-приказ-м-з-р': IISUchetMedZueva7ПриказМЗРModel,
    'i-i-s-uchet-med-zueva7-сотрудники': IISUchetMedZueva7СотрудникиModel,
    'i-i-s-uchet-med-zueva7-список-на-медосм': IISUchetMedZueva7СписокНаМедосмModel
  },

  'application-name': 'Uchet med zueva7',

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
        'application-name': 'Uchet med zueva7',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Uchet med zueva7',
          title: 'Uchet med zueva7'
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
        'формирование-документов': {
          caption: 'Формирование документов',
          title: 'Формирование документов',
          'i-i-s-uchet-med-zueva7-список-на-медосм-l': {
            caption: 'Список на медосм',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-инд-напр-медосм-l': {
            caption: 'Инд напр медосм',
            title: ''
          }
        },
        'организация-и-штат-сотрудников': {
          caption: 'Организация и штат сотрудников',
          title: 'Организация и штат сотрудников',
          'i-i-s-uchet-med-zueva7-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-организации-l': {
            caption: 'Организации',
            title: ''
          }
        },
        'производственная-информация': {
          caption: 'Производственная информация',
          title: 'Производственная информация',
          'i-i-s-uchet-med-zueva7-приказ-м-з-р-l': {
            caption: 'Приказ МЗР',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-класс-вред-фактор-l': {
            caption: 'Класс вред фактор',
            title: ''
          }
        },
        'uchet-med-zueva7': {
          caption: 'UchetMedZueva7',
          title: 'UchetMedZueva7',
          'i-i-s-uchet-med-zueva7-список-на-медосм-l': {
            caption: 'Список на медосм',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-класс-вред-фактор-l': {
            caption: 'Класс вред фактор',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-инд-напр-медосм-l': {
            caption: 'Инд напр медосм',
            title: ''
          },
          'i-i-s-uchet-med-zueva7-приказ-м-з-р-l': {
            caption: 'Приказ МЗР',
            title: ''
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
    'i-i-s-uchet-med-zueva7-должности-l': IISUchetMedZueva7ДолжностиLForm,
    'i-i-s-uchet-med-zueva7-инд-напр-медосм-l': IISUchetMedZueva7ИндНапрМедосмLForm,
    'i-i-s-uchet-med-zueva7-класс-вред-фактор-l': IISUchetMedZueva7КлассВредФакторLForm,
    'i-i-s-uchet-med-zueva7-организации-l': IISUchetMedZueva7ОрганизацииLForm,
    'i-i-s-uchet-med-zueva7-приказ-м-з-р-l': IISUchetMedZueva7ПриказМЗРLForm,
    'i-i-s-uchet-med-zueva7-сотрудники-l': IISUchetMedZueva7СотрудникиLForm,
    'i-i-s-uchet-med-zueva7-список-на-медосм-l': IISUchetMedZueva7СписокНаМедосмLForm,
    'i-i-s-uchet-med-zueva7-должности-e': IISUchetMedZueva7ДолжностиEForm,
    'i-i-s-uchet-med-zueva7-инд-напр-медосм-e': IISUchetMedZueva7ИндНапрМедосмEForm,
    'i-i-s-uchet-med-zueva7-класс-вред-фактор-e': IISUchetMedZueva7КлассВредФакторEForm,
    'i-i-s-uchet-med-zueva7-организации-e': IISUchetMedZueva7ОрганизацииEForm,
    'i-i-s-uchet-med-zueva7-приказ-м-з-р-e': IISUchetMedZueva7ПриказМЗРEForm,
    'i-i-s-uchet-med-zueva7-сотрудники-e': IISUchetMedZueva7СотрудникиEForm,
    'i-i-s-uchet-med-zueva7-список-на-медосм-e': IISUchetMedZueva7СписокНаМедосмEForm
  },

});

export default translations;
