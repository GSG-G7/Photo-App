const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app.js');

test('Phto-app', t => {
  t.plan(4);
  t.test(
    'inital test',
    t1 => {
      t1.equal(1, 1);
      t1.end();
    },
    'Initial test'
  );
  t.test('test for home route', t => {
    t.plan(1);
    supertest(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) t.error(err);
        t.equal(res.status, 200, 'Status code should be 200');
      });
  });
  t.test('test for post req', t => {
    t.plan(1);
    supertest(app)
      .post('/search')
      .send('search=dog')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) t.error(err);
        t.equal(res.status, 200, 'Status code should be 200');
      });
  });
  t.test('test for non ex', t => {
    t.plan(1);
    supertest(app)
      .post('/blbllb')
      .send('search=dog')
      .expect('Content-Type', /html/)
      .expect(404)
      .end((err, res) => {
        if (err) t.error(err);
        t.equal(res.status, 404, 'Status code should be 404');
      });
  });
});
