import checkPuzzle from './check.js';

function solve(puzzle, place) {
  const row = Math.floor(place / 9);
  const column = place % 9;
  let num = 1;

  if (place === 81)
    return puzzle;
  if (puzzle[row][column] !== 0)
    return solve(puzzle, place + 1);
  while (num < 10) {
    if (checkPuzzle(puzzle, row, column, num) === true) {
      puzzle[row][column] = num;
      if (solve(puzzle, place + 1)) {
        return solve(puzzle, place + 1);
      }
      else
        puzzle[row][column] === 0;
    }
    num++;
  }
  return false;
}

export default solve;
