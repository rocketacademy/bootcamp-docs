# 1.E.2: High Card DOM

Start from the examples of High Card using DOM and add onto them.

### Display

Build helper functions that will create the card DOM elements for a given card. Call this function by passing in a card object. Use it to build the cards you need to display in the game. 

```javascript
const cardObj = {
    name:'2',
    rank:2,
    suit:'hearts'
};

const cardElement = buildCard( cardObj );
document.body.appendChild( cardElement );
```

Build the display of other game elements, like the current player turn.

### High / Low Card

The players can draw multiple cards. The winner is the player who draws the hand that has the highest and the lowest card, or the greatest difference in rank between two cards in his hand.

Change the CSS of the game so that each players' cards are displayed in a row.

### Card Display

Arrange the cards so that the 2 most winningest cards are displayed next to each other in the row. 

### Number of Cards

Create a text input. The players will decide before hand how many cards will be drawn per player in the game by typing a number in the input and clicking a button. 

During game play the players can draw in any order until the set number of cards has been drawn. Display the winner after the last card has been drawn. 



