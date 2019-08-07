const test = require('tape');

test('Phto-app', t => {
  t.plan(1);
  t.test('inital test', t1 => {
    t1.equal(1, 1);
    t1.end();
  });
});
