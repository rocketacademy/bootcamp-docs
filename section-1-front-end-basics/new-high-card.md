# New High Card



```javascript
// get a random index from an array given it's size
var getRandomIndex = function (size) {
  return Math.floor(Math.random() * size);
};

// cards is an array of card objects
var shuffleCards = function (cards) {
  var currentIndex = 0;

  // loop over the entire cards array
  while (currentIndex < cards.length) {
    // select a random position from the deck
    var randomIndex = getRandomIndex(cards.length);

    // get the current card in the loop
    var currentItem = cards[currentIndex];

    // get the random card
    var randomItem = cards[randomIndex];

    // swap the current card and the random card
    cards[currentIndex] = randomItem;
    cards[randomIndex] = currentItem;

    currentIndex = currentIndex + 1;
  }

  // give back the shuffled deck
  return cards;
};

var makeDeck = function () {

  // create the empty deck at the beginning 
  var deck = [];

  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var suitIndex = 0;
  while (suitIndex < suits.length) {

    // make a variable of the current suit
    var currentSuit = suits[suitIndex];
    console.log("current suit : " + currentSuit)

    // loop to create all cards in this suit
    // rank 1-13
    var rankCounter = 1;
    while (rankCounter <= 13) {
      var cardName = rankCounter;

      // 1, 11, 12 ,13
      if (cardName == 1) {
        cardName = 'ace';
      } else if (cardName == 11) {
        cardName = 'jack';
      } else if (cardName == 12) {
        cardName = 'queen';
      } else if (cardName == 13) {
        cardName = 'king';
      }

      // make a single card object variable
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      console.log("rank : " + rankCounter);

      // add the card to the deck
      deck.push(card);
      
      rankCounter = rankCounter + 1;
    }
    suitIndex = suitIndex + 1;
  }

  return deck;

};

var deck = shuffleCards( makeDeck() );

var playersTurn = 1; // matches with starting instructions
var player1Card;

player1Button.addEventListener('click',function(){
  if( playersTurn == 1 ){
    player1Card = deck.pop();
    playersTurn = 2;
  }
});

player2Button.addEventListener('click',function(){

  if( playersTurn == 2 ){
  
    var player2Card = deck.pop();
    playersTurn = 1;

    if( player1Card.rank > player2Card.rank ){
      
      output('player 1 wins');
    }else if( player1Card.rank < player2Card.rank ){
    
      output('player 2 wins');
    }else{
    
      output('tie');
    }
  }
});

// don't write the dom manipulation
// code inline in the conditional
// create a helper function for output
var output = function(message){
  gameInfo.innerText = message;
};
```

