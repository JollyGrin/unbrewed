export default class Pool {
  constructor (shuffledDeck) {
    this.actionStack = []
    this.deck = shuffledDeck
    this.hand = []
    this.discard = []
    this.commit = {
      main: null,
      boost: null
    }

    this.draw = function () {
      this.hand.push(this.deck.pop())
    }

    this.discardCard = function (card) {
      this.hand = this.hand.filter(obj => {
        return obj.title !== card.title
      })

      this.discard.push(card)
    }

    this.drawDiscard = function (card) {
      this.discard = this.discard.filter(obj => {
        return obj.title !== card.title
      })

      this.hand.push(card)
    }
  }
}
