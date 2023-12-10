import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-паспортные-данные-l');
  this.route('i-i-s-test-паспортные-данные-e',
  { path: 'i-i-s-test-паспортные-данные-e/:id' });
  this.route('i-i-s-test-паспортные-данные-e.new',
  { path: 'i-i-s-test-паспортные-данные-e/new' });
  this.route('i-i-s-test-сотрудники-l');
  this.route('i-i-s-test-сотрудники-e',
  { path: 'i-i-s-test-сотрудники-e/:id' });
  this.route('i-i-s-test-сотрудники-e.new',
  { path: 'i-i-s-test-сотрудники-e/new' });
});

export default Router;
