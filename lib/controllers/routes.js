import { Router } from 'express';
import Sudoku from '../servies/Sudoku';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const puzzle = await Sudoku.create(req.body.difficulty);
      res.send(puzzle);
    }
    catch(err) {
      next(err);
    }
  });
