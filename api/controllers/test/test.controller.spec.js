require('app-module-path/cwd'); // eslint-disable-line import/no-unassigned-import

const test = require('ava');
const request = require('supertest');
const app = require('config/express');

test.cb('GET /api/uuid', (t) => {
  request(app)
    .get('/api/B268A43E-3B59-BF5D-B588-C1E1B42D269C')
    .expect(200) // OK
    .then((res) => {
      t.is(res.body.id, 'B268A43E-3B59-BF5D-B588-C1E1B42D269C');
      t.end();
    });
});

test.cb('GET /api/other', (t) => {
  request(app)
    .get('/api/other')
    .expect(400) // Bad Request
    .then(() => t.end());
});

test.cb('GET /api', (t) => {
  request(app)
    .get('/api')
    .expect(404) // Not Found
    .then(() => t.end());
});
