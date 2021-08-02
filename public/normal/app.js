const puzzleRender = document.getElementById('puzzle');

async function getPuzzle() {
  let unsolved = {};
  const { body } = await fetch('http://localhost:8000/api/v1/puzzle/', { method: 'POST', mode: 'no-cors' })
    .then(response => response.json())
    .then(data => unsolved = data[0]);
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

async function renderPuzzle() {
  let puzzle = [];
  puzzle = await getPuzzle()
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
    console.log(row);
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
const puzzle = renderPuzzle();
