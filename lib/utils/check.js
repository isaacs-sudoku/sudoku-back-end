function checkBox(puzzle, column, row, num) {
  column = column - column % 3;
  row = row - row % 3;
  const maxCol = column + 3;
  const maxRow = row + 3;

  while (column < maxCol) {
    while (row < maxRow) {
      if(puzzle[column][row] === num)
        return false;
      row++;
    }
    column++;
  }
  return true;
}

function checkColumnAndRow(puzzle, column, row, num) {
  let check = 0;

  while (check < 9) {
    if ((puzzle[column][check] === num) || puzzle[check][row] === num)
      return false;
    check++;
  }
  return true;
}

export default function checkPuzzle(puzzle, column, row, num) {
  if (!checkBox(puzzle, column, row, num) || !checkColumnAndRow(puzzle, column, row, num))
    return false;
  return true;
}
