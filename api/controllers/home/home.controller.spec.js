require('app-module-path/cwd'); // eslint-disable-line import/no-unassigned-import

const test = require('ava');
const request = require('supertest');
const app = require('config/express');

test.cb('GET /', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .then((res) => {
      t.end();
    });
});
