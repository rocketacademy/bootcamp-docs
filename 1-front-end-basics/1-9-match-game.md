# 1.9: Match Game

Create a card match game.

## Globals

```javascript
const board = [];
const firstCard = null;
const boardSize = 6;

let deck;
```

## Gameplay

```javascript
const squareClick = (cardElement, column, row) => {
  if (firstCard === null) {
    firstCard = board[column][row];
    // turn this card over
  } else if (board[column][row].name === firstCard.name
  && board[column][row].suit === firstCard.suit) {
    // turn this card over
  } else {
    firstCard = null;
    // turn this card back over
  }
};
```

## Game Init

```javascript
const buildBoard = (board) => {
  const boardElement = document.createElement('div');
  boardElement.classList.add('board');

  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    for (let j = 0; j < row.length; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      board[i][j] = deck.pop();

      // eslint-disable-next-line
      square.addEventListener('click', (event) => {
        squareClick(event.target, i, j);
      });
    }
  }
};

const gameInit = () => {
  deck = shuffleCards(makeDeck());
  buildBoard(board);
};
```

