# 1.12: Tic Tac Toe

Create a game of tic tac toe.

### Globals

```js
const board = [
    ['','',''],
    ['','',''],
    ['','','']
];

let boardElement;
```

### Game Init

```js
const gameInit = () => {
    buildBoard();
};

const buildBoard = (board) => {
    
    boardElement = document.createElement('div');
    boardElement.classList.add('board');
    
    for( let i=0; i<board.length; i++ ){
        let row = board[i];
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        
        for( let j=0; j<row.length; j++ ){
            const square = document.createElement('div');
            square.classList.add('square');
            
            // async error
            square.addEventListener('click', ()=>{
                squareClick( i,j );
            });
        }
    }

};
```

### Game Play

```js
const squareClick = (column, row) => {
    if( board[column][row] === '' ){
        board[column][row] = currentPlayer;
        buildBoard();
        togglePlayer();
    }
};

const togglePlayer = () => {
    if( currentPlayer === 'X' ){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }
};
```

Add a checkWin function when the player clicks a square

```js
const squareClick = function(column, row){
    if( board[column][row] === '' ){
        board[column][row] = currentPlayer;
        if( checkWin() === true ){
            // game over
        }else{
            togglePlayer();
        }
    }
};
```

```js
const checkWin = (board) => {

    // check every position
    // there is a conditional for all 15 win conditions
    if( board[0][0] === board[0][1] === board[0][2] ){
        // XXX
    }
    
    if( board[0][0] === board[1][0] === board[2][0] ){
        //X
        //X
        //X
    }

};
```

