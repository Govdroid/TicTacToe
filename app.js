const cells = document.querySelectorAll('td');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameEnd = false;

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '' && !gameEnd) {
      cell.textContent = currentPlayer;
      checkWin();
      togglePlayer();
    }
  });
});

resetButton.addEventListener('click', () => {
  cells.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameEnd = false;
});

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    const cellA = document.getElementById(`cell-${a}`);
    const cellB = document.getElementById(`cell-${b}`);
    const cellC = document.getElementById(`cell-${c}`);

    if (
      cellA.textContent === cellB.textContent &&
      cellB.textContent === cellC.textContent &&
      cellA.textContent !== ''
    ) {
      gameEnd = true;
      alert(`${currentPlayer} won!`);
    }
  }
}
