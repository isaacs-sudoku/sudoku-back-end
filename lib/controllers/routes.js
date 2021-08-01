import { Router } from 'express';
import UnsolvedPuzzle from '../models/Unsolved';
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
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const puzzle = await UnsolvedPuzzle.getById(id);

      res.send(puzzle);
    }
    catch(err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const { id } = req.params;
      const puzzle = await UnsolvedPuzzle.getAll(id);

      res.send(puzzle);
    }
    catch(err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { row1, row2, row3, row4, row5, row6, row7, row8, row9 } = req.body;

      const newPuzzle = await UnsolvedPuzzle.updateById(id, { row1, row2, row3, row4, row5, row6, row7, row8, row9 });
      res.send(newPuzzle);
    }
    catch(err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const puzzle = await UnsolvedPuzzle.deleteById(id);
      if(puzzle) {
        res.send({ message: 'new puzzle' });
      }
    }
    catch(err) {
      next(err);
    }
  });
