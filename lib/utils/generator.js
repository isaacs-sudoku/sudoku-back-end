import checkPuzzle from './check.js';
import solve from './solver.js';

let correctionFactor = 1;
export function generate(difficulty) {
  correctionFactor = 1;
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
  const unsolved = puzzle.map(row => row);
  let solutions = solutions(solutions);
  if (solve(puzzle, 0, solutions)) {
    while (solutions > 1) {
      puzzle = unsolved.map(row => row);
      const place = Math.floor(Math.random() * 81);
      puzzle[Math.floor(place / 9)][place % 9] === 0 ? addPossibleNumber(puzzle, Math.floor(place / 9), place % 9, difficulty) : 0;
      solve(puzzle, 0, solutions);
    }
    if (solutions === 1)
      return [puzzle, unsolved];
  }
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
  if (Math.random() > difficulty * correctionFactor) {
    const num = Math.ceil(Math.random() * 9);
    if (!checkPuzzle(puzzle, row, column, num)) {
      return addPossibleNumber(puzzle, row, column, difficulty);
    }
    correctionFactor += 0.01;
    puzzle[row][column] = num;
  }
  else
    correctionFactor -= 0.01;
  return puzzle;
}

function solutions(solutions) {
  return solutions++;
}
