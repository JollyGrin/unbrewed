export default class Pool {
  constructor(deckData) {
    // META
    this.author = deckData.creator;
    this.deckid = deckData.family_id;
    this.deckName = deckData.name;
    this.deckNote = deckData.note;

    // BASE INFO
    this.deck = deckData.cards;
    this.hero = {
      hp: deckData.deck_data.hero.hp,
      isRanged: deckData.deck_data.hero.isRanged,
      move: deckData.deck_data.hero.move,
      name: deckData.deck_data.hero.name,
      specialAbility: deckData.deck_data.hero.specialAbility,
    };
    this.sidekick = {
      hp: deckData.deck_data.sidekick.hp,
      isRanged: deckData.deck_data.sidekick.isRanged,
      quantity: deckData.deck_data.sidekick.quantity,
      name: deckData.deck_data.sidekick.name,
    };

    // CONTAINERS
    this.hand = [];
    this.discard = [];
    this.commit = {
      main: null,
      reveal: false,
      boost: null,
    };

    // FUNCTIONS
    this.draw = function() {
      this.hand.push(this.deck.pop());
    };

    this.drawDeck = function(cardIndex) {
      this.hand.push(this.deck[cardIndex]);
      this.deck.splice(cardIndex, 1);
    };

    this.deckCard = function(cardIndex) {
      this.deck.push(this.hand[cardIndex]);
      this.hand.splice(cardIndex, 1);
    };

    this.deckCardBottom = function(cardIndex) {
      this.deck.unshift(this.hand[cardIndex]);
      this.hand.splice(cardIndex, 1);
    };

    this.shuffleDeck = function() {
      this.deck.sort(() => Math.random() - 0.5);
    };

    this.discardCard = function(cardIndex) {
      this.discard.push(this.hand[cardIndex]);
      this.hand.splice(cardIndex, 1);
    };

    this.drawDiscard = function(cardIndex) {
      this.hand.push(this.discard[cardIndex]);
      this.discard.splice(cardIndex, 1);
    };

    this.commitCard = function(cardIndex) {
      this.commit.main = this.hand[cardIndex];
      this.hand.splice(cardIndex, 1);
    };

    this.discardCommit = function() {
      this.discard.push(this.commit.main);
      this.commit.main = null;
      this.commit.reveal = false;
    };

    this.cancelCommit = function() {
      this.hand.push(this.commit.main);
      this.commit.main = null;
      this.commit.reveal = false;
    };

    this.revealCommit = function() {
      this.commit.reveal
        ? (this.commit.reveal = false)
        : (this.commit.reveal = true);
    };
  }
}
