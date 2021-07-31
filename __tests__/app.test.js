import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import generate from '../lib/utils/generator.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('tests sudoku generation', () => {
    const res = generate();
    expect([]).toEqual(res);
  });
});
