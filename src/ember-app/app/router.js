import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-uchet-med-zueva7-должности-l');
  this.route('i-i-s-uchet-med-zueva7-должности-e',
  { path: 'i-i-s-uchet-med-zueva7-должности-e/:id' });
  this.route('i-i-s-uchet-med-zueva7-должности-e.new',
  { path: 'i-i-s-uchet-med-zueva7-должности-e/new' });
  this.route('i-i-s-uchet-med-zueva7-инд-напр-медосм-l');
  this.route('i-i-s-uchet-med-zueva7-инд-напр-медосм-e',
  { path: 'i-i-s-uchet-med-zueva7-инд-напр-медосм-e/:id' });
  this.route('i-i-s-uchet-med-zueva7-инд-напр-медосм-e.new',
  { path: 'i-i-s-uchet-med-zueva7-инд-напр-медосм-e/new' });
  this.route('i-i-s-uchet-med-zueva7-класс-вред-фактор-l');
  this.route('i-i-s-uchet-med-zueva7-класс-вред-фактор-e',
  { path: 'i-i-s-uchet-med-zueva7-класс-вред-фактор-e/:id' });
  this.route('i-i-s-uchet-med-zueva7-класс-вред-фактор-e.new',
  { path: 'i-i-s-uchet-med-zueva7-класс-вред-фактор-e/new' });
  this.route('i-i-s-uchet-med-zueva7-организации-l');
  this.route('i-i-s-uchet-med-zueva7-организации-e',
  { path: 'i-i-s-uchet-med-zueva7-организации-e/:id' });
  this.route('i-i-s-uchet-med-zueva7-организации-e.new',
  { path: 'i-i-s-uchet-med-zueva7-организации-e/new' });
  this.route('i-i-s-uchet-med-zueva7-приказ-м-з-р-l');
  this.route('i-i-s-uchet-med-zueva7-приказ-м-з-р-e',
  { path: 'i-i-s-uchet-med-zueva7-приказ-м-з-р-e/:id' });
  this.route('i-i-s-uchet-med-zueva7-приказ-м-з-р-e.new',
  { path: 'i-i-s-uchet-med-zueva7-приказ-м-з-р-e/new' });
  this.route('i-i-s-uchet-med-zueva7-сотрудники-l');
  this.route('i-i-s-uchet-med-zueva7-сотрудники-e',
  { path: 'i-i-s-uchet-med-zueva7-сотрудники-e/:id' });
  this.route('i-i-s-uchet-med-zueva7-сотрудники-e.new',
  { path: 'i-i-s-uchet-med-zueva7-сотрудники-e/new' });
  this.route('i-i-s-uchet-med-zueva7-список-на-медосм-l');
  this.route('i-i-s-uchet-med-zueva7-список-на-медосм-e',
  { path: 'i-i-s-uchet-med-zueva7-список-на-медосм-e/:id' });
  this.route('i-i-s-uchet-med-zueva7-список-на-медосм-e.new',
  { path: 'i-i-s-uchet-med-zueva7-список-на-медосм-e/new' });
});

export default Router;
