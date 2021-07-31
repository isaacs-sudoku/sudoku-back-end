import checkPuzzle from './check';
import solve from './solver';

export default function generate() {
  let puzzle = [];
  let row = 0;

  while (row < 9) {
    puzzle[row] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    row++;
  }
  row = 0;
  while (row < 9) {
    puzzle = addRow(puzzle, row);
    row++;
  }
  console.log(puzzle);
  if (solve(puzzle, 0)) {
    return puzzle;
  }
  else
    return generate();
}

function addRow(puzzle, row) {
  let column = 0;
  while (column < 9) {
    puzzle = addPossibleNumber(puzzle, row, column);
    column++;
  }
  return puzzle;
}

function addPossibleNumber(puzzle, row, column) {
  if (Math.random() > 0.5) {
    const num = Math.floor(Math.random() * 10);
    if (num === 0)
      return addPossibleNumber(puzzle, row, column);
    if (!checkPuzzle(puzzle, row, column, num)) {
      return addPossibleNumber(puzzle, row, column);
    }
    puzzle[row][column] = num;
  }
  return puzzle;
}
