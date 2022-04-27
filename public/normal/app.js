const puzzleRender = document.getElementById('puzzle');
const difficulty = { body: 0.5 };
const resetButton = document.getElementById('reset-button');

async function getPuzzle(difficulty) {
  let unsolved = {};
  let res = '';

  while (!res) {
    res = await fetch('https://isaacs-sudoku.herokuapp.com/api/v1/puzzle/', { method: 'POST', body: JSON.stringify(difficulty), headers: {
      'Content-type': 'application/json; charset=UTF-8'
    } })
      .then(response => response.json())
      .then(data => unsolved = data[0]);
  }
  const puzzle = [];
  puzzle[0] = unsolved.row1.split(',');
  puzzle[1] = unsolved.row2.split(',');
  puzzle[2] = unsolved.row3.split(',');
  puzzle[3] = unsolved.row4.split(',');
  puzzle[4] = unsolved.row5.split(',');
  puzzle[5] = unsolved.row6.split(',');
  puzzle[6] = unsolved.row7.split(',');
  puzzle[7] = unsolved.row8.split(',');
  puzzle[8] = unsolved.row9.split(',');

  return puzzle;
}

async function renderPuzzle(difficulty) {
  const check = document.createElement('span');
  check.textContent = '1';
  puzzleRender.append(check);
  let puzzle = [];
  puzzle = await getPuzzle(difficulty)
    .then(data => puzzle = data);
  let i = 0;
  while (i < 9) {
    let j = 0;
    const row = document.createElement('p');
    row.className = 'row';
    while (j < 9) {
      let cell = document.createElement('div');
      cell.value = puzzle[i][j];
      if (cell.value === '0'){
        cell = document.createElement('input');
        cell.textContent = ' ';
      }
      else
        cell.textContent = puzzle[i][j];
      if (j === 3 || j === 6){
        const horizLine = document.createElement('span');
        horizLine.textContent = '     ';
        row.appendChild(horizLine);
      }
      row.append(cell);
      j++;
    }
    row.id = i;
    puzzleRender.append(row);
    if (i === 2 || i === 5){
      const line = document.createElement('div');
      line.className = 'break';
      puzzleRender.append(line);
    }
    i++;
  }
}

function findById(data, id) {
  data = data.map(item => {
    if (item.id === id)
      return item;
  });
  return 0;
}
const puzzle = renderPuzzle(difficulty);
const button = resetButton.addEventListener('click', () => {
  while (puzzleRender.firstChild)
    puzzleRender.removeChild(puzzleRender.firstChild)
  renderPuzzle(difficulty);
})