# Match Game

Create a card match game.

### Globals

```text
var boardElements;
var firstCard = null;
var boardSize = 6;

var deck;
```

Game Init

```javascript
var gameInit = function(){
    deck = shuffleCards( makeDeck() ); 
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
            board[i][j] = deck.pop();
            
            // async error
            square.addEventListener('click', function(event){
                squareClick( event.target, i,j );
            });
        }
    }

};
```

Gameplay

```javascript
var squareClick = function(cardElement, column, row){
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

