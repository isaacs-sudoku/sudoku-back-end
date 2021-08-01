import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('tests backend generation', async () => {
    const res = await request(app)
      .post('/api/v1/puzzle')
      .send({ difficulty: 0.5 });
    
    expect(res.body).toEqual([]);
  });
});
