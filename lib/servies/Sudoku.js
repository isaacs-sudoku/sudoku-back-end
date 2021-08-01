// import request from 'superagent';
import UnsolvedPuzzle from '../models/Unsolved';
import SolvedPuzzle from '../models/Solved';
import generate from '../utils/generator';
// import solve from '../utils/solver';

class Sudoku {
  static async create(difficulty) {
    const puzzles = generate(difficulty);
    // console.log(puzzles);
    const unsolvedPuzzle = await UnsolvedPuzzle.insertUnsolved(puzzles[1]);
    const solution = await SolvedPuzzle.insertSolved(puzzles[0]);
    return [unsolvedPuzzle, solution];
  }
}

export default Sudoku;
