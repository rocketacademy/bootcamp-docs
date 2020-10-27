# 1.8: High Card setTimeout

Add setTimeout to the High Card game.

We'll add a delay when the user clicks the button.

We also want a global value that represents the state that the user has already cli8cked and we are waiting for the delay to end. If we don't have `canClick`, the user could trigger multiple `setTimeout`s.

## Globals

```javascript
// eslint-disable-next-line
let canClick = true;
let cardContainer;
```

## Game Initialization

```javascript
const gameInit = () => {
  // other game init stuff goes here
  // ...
  cardContainer = document.createElement('div');
  document.body.appendChild(cardContainer);
};
```

## Helper Functions

```javascript
// other helper functions
// ...
const createCard = (card) => {
  const cardEl = document.createElement('p');
  cardEl.innerText = card.name; // also output the other attributes
  return cardEl;
};
```

## Player Click Callbacks

```javascript
const player1Click = () => {
  if (playersTurn === 1 && canClick === true) {
    canClick = false;

    setTimeout(() => {
      player1Card = deck.pop();

      const cardElement = createCard(player1Card);

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
      const cardElement = createCard(player2Card);

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

### Exercise

Add the timeout to your High Card game.

