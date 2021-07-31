function checkBox(puzzle, row, column, num) {
  let rowTest = row - row % 3;
  let columnTest = column - column % 3;
  const maxRow = rowTest + 3;
  const maxCol = columnTest + 3;

  while (rowTest < maxRow) {
    while (columnTest < maxCol) {
      if((puzzle[rowTest][columnTest] === num)){
        return false;
      }
      columnTest++;
    }
    columnTest = columnTest - 3;
    rowTest++;
  }
  return true;
}

function checkColumnAndRow(puzzle, row, column, num) {
  let check = 0;

  while (check < 9) {
    if ((puzzle[row][check] === num) || puzzle[check][column] === num)
      return false;
    check++;
  }
  return true;
}

export default function checkPuzzle(puzzle, row, column, num) {
  if (!checkBox(puzzle, row, column, num) || !checkColumnAndRow(puzzle, row, column, num))
    return false;
  return true;
}
