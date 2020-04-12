export default class Pool {
  constructor (shuffledDeck, hero, sidekick) {
    this.hero = hero
    this.sidekick = sidekick

    this.actionStack = []
    this.deck = shuffledDeck
    this.hand = []
    this.discard = []
    this.commit = {
      main: null,
      reveal: false,
      boost: null
    }

    this.draw = function () {
      this.hand.push(this.deck.pop())
    }

    this.drawDeck = function (cardIndex) {
      this.hand.push(this.deck[cardIndex])
      this.deck.splice(cardIndex, 1)
    }

    this.deckCard = function (cardIndex) {
      this.deck.push(this.hand[cardIndex])
      this.hand.splice(cardIndex, 1)
    }

    this.shuffleDeck = function () {
      this.deck.sort(() => Math.random() - 0.5)
    }

    this.discardCard = function (cardIndex) {
      this.discard.push(this.hand[cardIndex])
      this.hand.splice(cardIndex, 1)
    }

    this.drawDiscard = function (cardIndex) {
      this.hand.push(this.discard[cardIndex])
      this.discard.splice(cardIndex, 1)
    }

    this.commitCard = function (cardIndex) {
      this.commit.main = this.hand[cardIndex]
      this.hand.splice(cardIndex, 1)
    }

    this.discardCommit = function () {
      this.discard.push(this.commit.main)
      this.commit.main = null
      this.commit.reveal = false
    }

    this.cancelCommit = function () {
      this.hand.push(this.commit.main)
      this.commit.main = null
      this.commit.reveal = false
    }

    this.revealCommit = function () {
      this.commit.reveal
        ? (this.commit.reveal = false)
        : (this.commit.reveal = true)
    }
  }
}
