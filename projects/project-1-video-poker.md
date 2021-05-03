# Project 1: Video Poker

## Introduction

[Video Poker](https://en.wikipedia.org/wiki/Video_poker) is single-player Poker where we try to optimise our score by getting the best possible hands. The gameplay is as follows.

1. The user starts with 100 points.
2. When they click the "Deal" button the computer deals a hand of 5 cards. The user can choose any number of their cards to replace with new, random cards.
3. After the user finishes replacing cards, the game assigns points based on the resulting hand. See rankings of Poker hands [here](https://en.wikipedia.org/wiki/List_of_poker_hands#Hand-ranking_categories).

## Setup

Fork and clone the [Video Poker Repo](https://github.com/rocketacademy/video-poker-bootcamp).

## Base

1. Create a helper function called `calcHandScore`. This function will take an array of card objects and return the number of points that the user scored for the cards in their hand.
2. This `calcHandScore` function will allow you to build the gameplay and abstract away the hand scoring logic. It will also make testing the hand scoring logic easier.
3. Begin by coding the entire basic working game where the `calcHandScore` function returns the same number of points regardless of the cards that are passed to it.
4. Specifically this functionality is where:
   1. The user has the global total number of points they currently have.
   2. The user clicks a button to start the game.
   3. The game deals the cards.
   4. The users selects which cards they want to keep.
   5. The game gives the user their final score and adds or subtracts points.
5. Lay the game controls out for a phone \(portrait orientation\). Set the `max-width` of the container so that it does not look bad on a wider device.

### `calcHandScore`

1. After you have a working, playable version of the game, add logic to `calcHandScore`.
   1. Begin by adding the logic for detecting each hand one at a time. 
   2. Test that logic and then move onto detecting the next kind of hand.
2. Hard-code the arrays of card objects you will need to test your logic. Don't forget to test the negative cases. \(You win, but can you still lose?\)

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

1. clean, well documented code. You have probably refactored it at least once.
2. clean design \(just make sure that the colors are muted and things are centered and have padding\)
3. sounds
4. animations \(you can look up CSS animations, you can also append GIFs into the screen to get motion\)
5. looks good on a laptop/desktop \(responsive CSS\)
6. runs without any errors / is resetable - when using the game it has no unexpected behaviors or weird quirks

Use some pre-created art and assets to make your game look nice. Here are some resources:

1. [https://conceptartempire.com/free-game-art-sites/](https://conceptartempire.com/free-game-art-sites/)
2. [https://itch.io/game-assets/free](https://itch.io/game-assets/free)
3. [https://opengameart.org/](https://opengameart.org/)
4. [https://www.gameart2d.com/freebies.html](https://www.gameart2d.com/freebies.html)

## More Comfortable

Note: The goal of this project is to practise frontend, thus please make sure your app is at a good level of polish before attempting the following More Comfortable features.

### Probabilities

Show the user the probability of getting each winning hand if they choose to switch the cards that are currently selected.

### 7 Card Stud

Implement 7 card stud rules for poker instead of 5 card draw.

{% hint style="danger" %}
**Rocket Academy does not endorse gambling.** We chose Video Poker as a project because of its complex rules that help facilitate coding instruction.
{% endhint %}

## Past Student Projects

### Batch 3

1. [https://eddiejpot.github.io/video-poker-bootcamp/](https://eddiejpot.github.io/video-poker-bootcamp/)
2. [https://emily-zhangg.github.io/video-poker-bootcamp/](https://emily-zhangg.github.io/video-poker-bootcamp/)
3. [https://samanthadotdesign.github.io/video-poker/](https://samanthadotdesign.github.io/video-poker/)
4. [https://jokatty.github.io/video-poker-bootcamp/](https://jokatty.github.io/video-poker-bootcamp/)
5. [https://zaf07.github.io/video-poker-bootcamp/](https://zaf07.github.io/video-poker-bootcamp/)

### Batch 2

1. [https://iannyip.github.io/video-poker-swe1/](https://iannyip.github.io/video-poker-swe1/)
2. [https://jerome-chua.github.io/video-poker-swe1/](https://jerome-chua.github.io/video-poker-swe1/)
3. [https://michelle-mok.github.io/video-poker-swe1/](https://michelle-mok.github.io/video-poker-swe1/)
4. [https://zephaniahong.github.io/video-poker-swe1/](https://zephaniahong.github.io/video-poker-swe1/)

### Batch 1

1. [https://jcleow.github.io/video-poker-swe1/](https://jcleow.github.io/video-poker-swe1/)
2. [https://jeremylim91.github.io/video-poker-swe1/](https://jeremylim91.github.io/video-poker-swe1/)
3. [https://kenrickles.github.io/video-poker-swe1/](https://kenrickles.github.io/video-poker-swe1/)
4. [https://lightweightcoder.github.io/video-poker-swe1/](https://lightweightcoder.github.io/video-poker-swe1/)
5. [https://veena-s.github.io/video-poker-swe1/](https://veena-s.github.io/video-poker-swe1/)

