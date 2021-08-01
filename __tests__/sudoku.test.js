import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import generate from '../lib/utils/generator.js';
import solve from '../lib/utils/solver.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  // it.only('tests sudoku generation', () => {
  //   const res = generate();
  //   expect([]).toEqual(res);
  // });

  // it('tests sudoku solver', () => {
  //   const puzzle = [[0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 8, 0, 0, 0, 7, 0, 9, 0], [6, 0, 2, 0, 0, 0, 5, 0, 0], [0, 7, 0, 0, 6, 0, 0, 0, 0], [0, 0, 0, 9, 0, 1, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 4, 0], [0, 0, 5, 0, 0, 0, 6, 0, 3], [0, 9, 0, 4, 0, 0, 0, 7, 0], [0, 0, 6, 0, 0, 0, 0, 0, 0]];
  //   const res = solve(puzzle, 0);
  //   const expected = [[9, 5, 7, 6, 1, 3, 2, 8, 4], [4, 8, 3, 2, 5, 7, 1, 9, 6], [6, 1, 2, 8, 4, 9, 5, 3, 7], [1, 7, 8, 3, 6, 4, 9, 5, 2], [5, 2, 4, 9, 7, 1, 3, 6, 8], [3, 6, 9, 5, 2, 8, 7, 4, 1], [8, 4, 5, 7, 9, 2, 6, 1, 3], [2, 9, 1, 4, 6, 3, 8, 7, 5], [7, 3, 6, 1, 8, 5, 4, 2, 9]];
  //   expect(res).toEqual(expected);
  // });
});
