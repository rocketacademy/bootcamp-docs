# Tic Tac Toe

Create a game of tic tac toe.

### Globals

```text
var board = [
    ['','',''],
    ['','',''],
    ['','','']
];

var boardElement;
```

### Game Init

```javascript
var gameInit = function(){
    buildBoard();
};

var buildBoard = function(board){
    
    boardElement = document.createElement('div');
    boardElement.classList.add('board');
    
    for( var i=0; i<board.length; i++ ){
        var row = board[i];
        var rowElement = document.createElement('div');
        rowElement.classList.add('row');
        
        for( var j=0; j<row.length; j++ ){
            var square = document.createElement('div');
            square.classList.add('square');
            
            // async error
            square.addEventListener('click', function(){
                squareClick( i,j );
            });
        }
    }

};
```

### Game Play

```javascript
var squareClick = function(column, row){
    if( board[column][row] === '' ){
        board[column][row] = currentPlayer;
        buildBoard();
        togglePlayer();
    }
};

var togglePlayer = function(){
    if( currentPlayer === 'X' ){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }
};
```

Add a checkWin function when the player clicks a square

```javascript
var squareClick = function(column, row){
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

```javascript
var checkWin = function(board){

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

