import checkPuzzle from './check.js';
import solutions
let solutions = 0;

// function solve(puzzle, place) {
//   const row = Math.floor(place / 9);
//   const column = place % 9;
//   let num = 1;

//   if (place === 81)
//     return puzzle;
//   if (puzzle[row][column] !== 0)
//     return solve(puzzle, place + 1, solutions);
//   while (num < 10) {
//     if (checkPuzzle(puzzle, row, column, num) === true) {
//       puzzle[row][column] = num;
//       if (solve(puzzle, place + 1, solutions)) {
//         return solve(puzzle, place + 1, solutions);
//       }
//       else
//         puzzle[row][column] === 0;
//     }
//     num++;
//   }
//   return false;
// }

function solve(puzzle, place, solutions) {
  const row = Math.floor(place / 9);
  const column = place % 9;
  let num = 1;

  if (place === 81) {
    solutions++;
    console.log(solutions);
    return puzzle;
  }
  if (puzzle[row][column] !== 0)
    return solve(puzzle, place + 1, solutions);
  while (num < 10) {
    if (checkPuzzle(puzzle, row, column, num) === true) {
      puzzle[row][column] = num;
      if (solve(puzzle, place + 1, solutions)) {
        return solve(puzzle, place + 1, solutions);
      }
      else
        puzzle[row][column] === 0;
    }
    num++;
  }
  return false;
}

export default solve;
