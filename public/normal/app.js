const puzzleRender = document.getElementById('puzzle');

async function getPuzzle() {
  const { body } = await fetch('http://localhost:8000/api/v1/puzzle/', { method: 'POST', mode: 'no-cors' });
  console.log(body);
  const puzzle = [];
  puzzle[0] = body[0].row1.split(',');
  puzzle[1] = body[0].row2.split(',');
  puzzle[2] = body[0].row3.split(',');
  puzzle[3] = body[0].row4.split(',');
  puzzle[4] = body[0].row5.split(',');
  puzzle[5] = body[0].row6.split(',');
  puzzle[6] = body[0].row7.split(',');
  puzzle[7] = body[0].row8.split(',');
  puzzle[8] = body[0].row9.split(',');

  return puzzle;
}

function renderPuzzle(puzzle) {
  let i = 0;
  while (i < 9) {
    let j = 0;
    const row = document.createElement('p');
    while (j < 9) {
      const cell = document.createElement('div');
      cell.value = puzzle[i][j];
      row.appendChild(cell);
      j++;
    }
    row.id = i;
    puzzleRender.appendChild(row);
    i++;
  }
}
const puzzle = getPuzzle();
console.log(puzzle);
renderPuzzle(puzzle);
