# 1.8: High Card setTimeout

Add setTimeout to the High Card game.

We'll add a delay when the user clicks the button.

We also want a global value that represents the state that the user has already cli8cked and we are waiting for the delay to end. If we don't have `canClick`, the user could trigger multiple `setTimeout`s.

## Globals

```javascript
// eslint-disable-next-line
let canClick = true;
```

## Player Click Callbacks

```javascript
const player1Click = () => {
  if (playersTurn === 1 && canClick === true) {
    canClick = false;

    setTimeout(() => {
      player1Card = deck.pop();

      const cardElement = createCard(playerCard);

      // in case this is not the 1st time
      // in the entire app,
      // empty the card container
      cardContainer.innerHTML = '';

      cardContainer.appendChild(cardElement);
      playersTurn = 2;
      canClick = true;
    }, 2000);
  }
};

const player2Click = () => {
  if (playersTurn === 2 && canClick === true) {
    canClick = false;

    setTimeout(() => {
      const player2Card = deck.pop();
      cardContainer.appendChild(cardElement);

      playersTurn = 1;
      canClick = true;

      if (player1Card.rank > player2Card.rank) {
        output('player 1 wins');
      } else if (player1Card.rank < player2Card.rank) {
        output('player 2 wins');
      } else {
        output('tie');
      }
    }, 2000);
  }
};
```

