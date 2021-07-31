import checkPuzzle from './check.js';

function solve(puzzle, place) {
  const row = Math.floor(place / 9);
  const column = place % 9;
  let num = 1;

  if (place === 81)
    return true;
  if (puzzle[row][column] != 0)
    return solve(puzzle, place + 1);
  while (num < 10) {
    if (checkPuzzle(puzzle, row, column, num) === 0) {
      puzzle[row][column] = num;
      if (solve(puzzle, place + 1))
        return true;
      else
        puzzle[row][column] === 0;
    }
    num++;
  }
}

export default solve;
