# High Card setTimeout

```javascript
const player1Click = () => {
  if( playersTurn === 1 && canClick === true ){
    canClick = false;

    setTimeout(()=>{
      player1Card = deck.pop();
      
      const cardElement = createCard( playerCard );
      
      // in case this is not the 1st time
      // in the entire app,
      // empty the card container
      cardContainer.innerHTML = '';
      
      cardContainer.appendChild( cardElement );
      playersTurn = 2;
      canClick = true;
      
    },2000)
    
  }
});

const player2Click = () => {

  if( playersTurn === 2 && canClick === true ){
    canClick = false;

    setTimeout(()=>{
      const player2Card = deck.pop();
      cardContainer.appendChild( cardElement );
  
      playersTurn = 1;
      canClick = true;
  
      if( player1Card.rank > player2Card.rank ){
        
        output('player 1 wins');
      }else if( player1Card.rank < player2Card.rank ){
      
        output('player 2 wins');
      }else{
      
        output('tie');
      }
    },2000);
  }
});
```

