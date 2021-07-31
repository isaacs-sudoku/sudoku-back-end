import checkPuzzle from './check.js';

function solve(puzzle, place) {
  const column = place / 9;
  const row = place % 9;
  let num = 1;

  if (place === 81)
    return true;
  if (puzzle[column][row] != 0)
    return solve(puzzle, place + 1);
  while (num < 10) {
    if (checkPuzzle(puzzle, column, row, num) === 0) {
      puzzle[column][row] = num;
      if (solve(puzzle, place + 1))
        return true;
      else
        puzzle[column][row] === 0;
    }
    num++;
  }
}

export default solve;
