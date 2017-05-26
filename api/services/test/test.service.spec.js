const test = require('ava');
const service = require('./test.service');

test('getId', (t) => {
  const id = service.getId('myId');

  t.is(id, 'myId');
});
