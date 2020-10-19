# 1.12: Tic Tac Toe

Create a game of tic tac toe.

## Globals

```javascript
const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let boardElement;
```

## Game Init

```javascript
const buildBoard = (board) => {
  boardElement = document.createElement('div');
  boardElement.classList.add('board');

  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    for (let j = 0; j < row.length; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');

      // eslint-disable-next-line
      square.addEventListener('click', () => {
        squareClick(i, j);
      });
    }
  }
};

const gameInit = () => {
  buildBoard();
};
```

## Game Play

```javascript
const togglePlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
};

const squareClick = (column, row) => {
  if (board[column][row] === '') {
    board[column][row] = currentPlayer;
    buildBoard();
    togglePlayer();
  }
};
```

