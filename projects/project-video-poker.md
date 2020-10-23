# Project 1: Video Poker

Video Poker is the Poker card game, but for one player. You will play hands of poker and try to score points by getting the best hand possible.

### Setup

Begin by forking the [Video Poker Repo](https://github.com/rocketacademy/video-poker-swe1).

### Game Play

The user will start the game with 100 points.

When they click the "deal" button a hand of five cards will be dealt. They user can ask for different cards if they want.

The game gives points based on the hand the user got.

Look up the [rankings of Poker hands here.](https://en.wikipedia.org/wiki/List_of_poker_hands)

## Approach

Create a helper function called handScore. This function will take an array of card objects and return the number of points that the user scored for the cards in their hand.

This handScore function will allow you to build the gameplay and abstract away the hand score logic. It will also make testing the hand score logic very easy.

Begin by coding the entire basic working game where the handScore function returns the same number of points regardless of the cards that are passed to it.

Specifically this functionality is where:

* The user has the global total number of points they currently have.
* The user clicks a button to start the game.
* The game deals the cards.
* The users selects which cards they want to keep.
* The game gives the user their final score and adds or subtracts points.

### `handScore` 

After you have a working, playable version of the game, add logic to the hand score function. Begin by adding the logic for detecting each hand one at a time. Test that logic and then move onto detecting the next kind of hand.

Hard code the arrays of card objects you will need to test your logic. Don't forget to test the negative cases. \(You win, but can you still lose?\)

## More Comfortable

### Polish

This is your chance to create a project that has polish and that you can show off. A complete and demonstrable project has a few attributes:

* clean, well documented code. You have probably refactored it at least once.
* clean design \(just make sure that the colors are muted and things are centered and have padding\)
* sounds
* animations \(you can look up CSS animations, you can also append GIFs into the screen to get motion\)
* looks good on a phone \(responsive CSS\)
* runs without any errors / is resetable - when using the game it has no unexpected behaviors or weird quirks

### Game Logic

Implement 7 card stud rules for poker instead of 5 card draw.



## 





