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

    this.discardCard = function (cardIndex) {
      // this.hand = this.hand.filter(obj => {
      //   return obj.title !== card.title
      // })

      // this.discard.push(cardIndex)

      this.discard.push(this.hand[cardIndex])
      this.hand.splice(cardIndex, 1)
    }

    this.drawDiscard = function (cardIndex) {
      // this.discard = this.discard.filter(obj => {
      //   return obj.title !== card.title
      // })
      // this.hand.push(card)

      this.hand.push(this.discard[cardIndex])
      this.discard.splice(cardIndex, 1)
    }
  }
}
