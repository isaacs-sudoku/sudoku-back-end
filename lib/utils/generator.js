import checkPuzzle from './check.js';
import solve from './solver.js';

let globalDifficultyFactor = 1;
export default function generate(difficulty) {
  let puzzle = [];
  let row = 0;

  while (row < 9) {
    puzzle[row] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    row++;
  }
  row = 0;
  while (row < 9) {
    puzzle = addRow(puzzle, row, difficulty);
    row++;
  }
  const unsolved = puzzle.map(row => row.toString());
  if (solve(puzzle, 0)) {
    puzzle = puzzle.map(row => row.toString());
    return [puzzle, unsolved];
  }
  else
    return generate(difficulty);
}

function addRow(puzzle, row, difficulty) {
  let column = 0;
  while (column < 9) {
    puzzle = addPossibleNumber(puzzle, row, column, difficulty);
    column++;
  }
  return puzzle; 
}

function addPossibleNumber(puzzle, row, column, difficulty) {
  if (Math.random() > difficulty * globalDifficultyFactor) {
    globalDifficultyFactor += 0.01;
    const num = Math.ceil(Math.random() * 9);
    if (!checkPuzzle(puzzle, row, column, num)) {
      return addPossibleNumber(puzzle, row, column);
    }
    puzzle[row][column] = num;
  }
  else
    globalDifficultyFactor -= 0.01;
  return puzzle;
}
