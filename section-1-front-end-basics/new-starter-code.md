# New Dice Game

Given that we have a little background on how the DOM works we can create a dice game that uses a simpler starter code. We'll create all the DOM parts of the game ourselves inside the `script.js`.

Start with the empty vanilla JS starter code repo: [https://github.com/rocketacademy/vanilla-js-starter-swe1](https://github.com/rocketacademy/vanilla-js-starter-swe1)

#### Managing the DOM

We'll use a few principals to help shape what code we end up with:

1\) Use global values to represent the state of our app/ store values. 

Some kinds of tutorials or apps will talk about information in the app being stored inside of elements in the DOM, but we will try as much as possible to keep the information and logic out of elements.

2\) Use global values to control inputs and / or element values, instead of manipulating the DOM.

If we want to control what a button does or the value of something on the screen, try to use the DOM as little as possible.

3\) User behavior / events kick off data that gets displayed on screen. Data flows from the events of the browser out to the visible screen. Thinking about what's happening within the logic of the app this way will make it easier to create your logic.

#### Create the Starting State

First we need JavaScript that creates the starting state of our game. This code runs when the page loads. 

```javascript
// create two buttons
var player1Button = document.createElement('button');
player1Button.innerText = 'Player 1 Roll';

var player2Button = document.createElement('button');
player2Button.innerText = 'Player 2 Roll';


// create game info div as global value
// fill game info div with starting instructions
var gameInfo = document.createElement('div');
gameInfo.innerText = 'Its player 1 turn. Click the roll dice button!';
```

#### Add in the click event callback functions.

We'll use a global value to keep track of the current player's turn. 

```javascript
var playersTurn = 1; // matches with starting instructions
var player1Roll = null;

var diceRoll = function () {
  var randomDecimal = Math.random() * 6;

  var randomInteger = Math.floor(randomDecimal);

  var diceNumber = randomInteger + 1;

  return diceNumber;
};

player1Button.addEventListener('click',function(){
  if( playersTurn == 1 ){
    player1Roll = rollDice();
    playersTurn = 2;
  }
});

player2Button.addEventListener('click',function(){

  if( playersTurn == 2 ){
  
    var player2Roll = rollDice();
    playersTurn = 1;
    
    if( player1Roll > player2Roll ){
    
      output('player 1 wins');
    }else if( player1Roll < player2Roll ){
    
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





