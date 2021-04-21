# Project 1: Video Poker

## Introduction

Video Poker is the Poker card game, but for one player. You will play hands of poker and try to score points by getting the best hand possible.

## Setup

Begin by forking the [Video Poker Repo](https://github.com/rocketacademy/video-poker-bootcamp).

## Game Play

1. The user will start the game with 100 points.
2. When they click the "deal" button a hand of five cards will be dealt. They user can ask for different cards if they want.
3. The game gives points based on the hand the user got. Look up the [rankings of Poker hands here.](https://en.wikipedia.org/wiki/List_of_poker_hands)

Reference this [Wikipedia page about video poker.](https://en.wikipedia.org/wiki/Video_poker)

## Basic

Create a helper function called `calcHandScore`. This function will take an array of card objects and return the number of points that the user scored for the cards in their hand.

This `calcHandScore` function will allow you to build the gameplay and abstract away the hand scoring logic. It will also make testing the hand scoring logic very easy.

Begin by coding the entire basic working game where the `calcHandScore` function returns the same number of points regardless of the cards that are passed to it.

Specifically this functionality is where:

* The user has the global total number of points they currently have.
* The user clicks a button to start the game.
* The game deals the cards.
* The users selects which cards they want to keep.
* The game gives the user their final score and adds or subtracts points.

Lay the game controls out for a phone \(portrait orientation\). Set the `max-width` of the container so that it does not look bad on a wider device.

### `calcHandScore`

After you have a working, playable version of the game, add logic to `calcHandScore`. Begin by adding the logic for detecting each hand one at a time. Test that logic and then move onto detecting the next kind of hand.

Hard code the arrays of card objects you will need to test your logic. Don't forget to test the negative cases. \(You win, but can you still lose?\)

```javascript
// example hand
const playerHand = [
  { rank: 2, suit: 'hearts', name: '2' },
  { rank: 2, suit: 'diamonds', name: '2' },
  { rank: 5, suit: 'spades', name: '5' },
  { rank: 7, suit: 'spades', name: '7' },
  { rank: 9, suit: 'hearts', name: '9' },
];

// in this example the function will return points for a pair
const pointsForHand = calcHandScore(playerHand);
```

### Cards Tally

A concise technique for counting the types of cards in a hand uses an object to keep track of which types are in the array. See [1.14: Cards Tally](../1-frontend-basics/1.14-cards-tally.md).

## Comfortable

### Polish

This is your chance to create a project that has polish and that you can show off. A complete and demonstrable project has a few attributes:

* clean, well documented code. You have probably refactored it at least once.
* clean design \(just make sure that the colors are muted and things are centered and have padding\)
* sounds
* animations \(you can look up CSS animations, you can also append GIFs into the screen to get motion\)
* looks good on a laptop/desktop \(responsive CSS\)
* runs without any errors / is resetable - when using the game it has no unexpected behaviors or weird quirks

Use some pre-created art and assets to make your game look nice. Here are some resources:

* [https://conceptartempire.com/free-game-art-sites/](https://conceptartempire.com/free-game-art-sites/)
* [https://itch.io/game-assets/free](https://itch.io/game-assets/free)
* [https://opengameart.org/](https://opengameart.org/)
* [https://www.gameart2d.com/freebies.html](https://www.gameart2d.com/freebies.html)

## More Comfortable

Note: The goal of this project is to practise frontend, thus please make sure your app is at a good level of polish before attempting the following More Comfortable features.

### Probabilities

Show the user the probability of getting each winning hand if they choose to switch the cards that are currently selected.

### 7 Card Stud

Implement 7 card stud rules for poker instead of 5 card draw.

{% hint style="danger" %}
**Rocket Academy does not endorse gambling.** We chose Video Poker as a project because of its complex rules that help facilitate coding instruction.
{% endhint %}

