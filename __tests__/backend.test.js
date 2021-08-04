import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('tests backend generation', async () => {
    let res = '';
    while (!res) {
      res = await request(app)
        .post('/api/v1/puzzle')
        .send({ body: 0.7 });
    }
    expect(res.body.length).toEqual(2); //this was really annoying becasue of the way I return my data
  });

  // it('tests a specific get route', async () => {
  //   const res = await request(app)
  //     .get('/api/v1/puzzle/1');
  //   expect(res.body.length).toEqual(2);
  // });
});
