// import request from 'superagent';
import UnsolvedPuzzle from '../models/Unsolved.js';
import SolvedPuzzle from '../models/Solved.js';
import generate from '../utils/generator.js';
// import solve from '../utils/solver';

class Sudoku {
  static async create(difficulty) {
    const puzzles = generate(0.5);
    const unsolvedPuzzle = await UnsolvedPuzzle.insertUnsolved(puzzles[1]);
    const solution = await SolvedPuzzle.insertSolved(puzzles[0]);
    return [unsolvedPuzzle, solution];
  }
}

export default Sudoku;
