# 1.9: Match Game

Create a card match game.

### Globals

```javascript
const board = [];
let firstCard = null;
const boardSize = 6;

let deck;
```

### Game Init

```javascript
const gameInit = () => {
    deck = shuffleCards( makeDeck() ); 
    buildBoard(board);
};

var buildBoard = (board) => {
    
    const boardElement = document.createElement('div');
    boardElement.classList.add('board');
    
    for( let i=0; i<board.length; i++ ){
        let row = board[i];
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        
        for( let j=0; j<row.length; j++ ){
            const square = document.createElement('div');
            square.classList.add('square');
            board[i][j] = deck.pop();
            
            square.addEventListener('click', (event) => {
                squareClick( event.target, i, j );
            });
        }
    }

};
```

### Gameplay

```javascript
const squareClick = (cardElement, column, row) => {
    if( firstCard === null ){
        firstCard = board[column][row];
        // turn this card over
    }else if( board[column][row].name === firstCard.name && board[column][row].suit === firstCard.suit ){
        // turn this card over
    }else{
        firstCard = null;
        // turn this card back over
    }
};
```

