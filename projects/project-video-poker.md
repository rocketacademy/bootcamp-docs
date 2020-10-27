# Project 1: Video Poker

{% hint style="danger" %}
Note that Rocket Academy does not endorse gambling or any other illegal activity.
{% endhint %}

Video Poker is the Poker card game, but for one player. You will play hands of poker and try to score points by getting the best hand possible.

### Setup

Begin by forking the [Video Poker Repo](https://github.com/rocketacademy/video-poker-swe1).

### Game Play

The user will start the game with 100 points.

When they click the "deal" button a hand of five cards will be dealt. They user can ask for different cards if they want.

The game gives points based on the hand the user got.

Look up the [rankings of Poker hands here.](https://en.wikipedia.org/wiki/List_of_poker_hands)

You can use this implementation of [Video Poker here as a reference](https://www.freeslots.com/poker.htm).

You can also reference this [Wikipedia page about video poker.](https://en.wikipedia.org/wiki/Video_poker)

## Basic

Create a helper function called `getHandScore`. This function will take an array of card objects and return the number of points that the user scored for the cards in their hand.

This `getHandScore` function will allow you to build the gameplay and abstract away the hand scoring logic. It will also make testing the hand scoring logic very easy.

Begin by coding the entire basic working game where the `getHandScore` function returns the same number of points regardless of the cards that are passed to it.

Specifically this functionality is where:

* The user has the global total number of points they currently have.
* The user clicks a button to start the game.
* The game deals the cards.
* The users selects which cards they want to keep.
* The game gives the user their final score and adds or subtracts points.

### `getHandScore`

After you have a working, playable version of the game, add logic to `getHandScore`. Begin by adding the logic for detecting each hand one at a time. Test that logic and then move onto detecting the next kind of hand.

Hard code the arrays of card objects you will need to test your logic. Don't forget to test the negative cases. \(You win, but can you still lose?\)

## Comfortable

### Polish

This is your chance to create a project that has polish and that you can show off. A complete and demonstrable project has a few attributes:

* clean, well documented code. You have probably refactored it at least once.
* clean design \(just make sure that the colors are muted and things are centered and have padding\)
* sounds
* animations \(you can look up CSS animations, you can also append GIFs into the screen to get motion\)
* looks good on a phone \(responsive CSS\)
* runs without any errors / is resetable - when using the game it has no unexpected behaviors or weird quirks

## More Comfortable

### Game Logic

Implement 7 card stud rules for poker instead of 5 card draw.

