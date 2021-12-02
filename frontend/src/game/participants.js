import { deck } from './globals';

class Deck {
  let cardCount = 52
  let cards = deck
}

export class Dealer {

  let deck = new Deck()

  // some animation
  static shuffleDeck(deck) {
    // some logic
    // then:
    return shuffledDeck
  }

  static partitionDeck(shuffledDeck) {
    let playerOneDeck = shuffledDeck[:len(shuffledDeck/2)]
    let playerTwoDeck = shuffledDeck[len(shuffledDeck/2):]
    return [playerOneDeck, playerTwoDeck]
  }
}

export class Player {
  constructor(deck, name) {
    this.deck = deck
    this.name = name
  }
  let winner = false
  let myTurn = false
}


/* Hoisting

An important difference between function declarations and class declarations is that while functions
can be called in code that appears before they are defined, classes must be defined before they can be constructed.

Code like the following will throw a referenceError

const p = new Rectangle(); // referenceError

class Rectangle {}

*/
