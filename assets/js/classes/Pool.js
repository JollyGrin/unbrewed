export default class Pool {
  constructor(deckData) {
    // META
    this.author = deckData.creator;
    this.deckid = deckData.family_id;
    this.deckName = deckData.name;
    this.deckNote = deckData.note;
    this.cards = deckData.deck_data.cards;

    // BASE INFO
    this.deck = deckData.deck_data.cards;
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
  }

  // FUNCTIONS
  makeDeck = function() {
    const cards = this.cards;
    let newDeck = [];
    cards.forEach((spell) => {
      const { quantity } = spell;
      let i;
      for (i = 0; i < quantity; i++) {
        newDeck.push(spell);
      }
    });
    this.deck = newDeck;
  };

  shuffleDeck = function() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  };

  draw = function() {
    if (this.deck.length === 0) {
      alert('No cards left');
    }
    this.hand.push(this.deck.pop());
  };

  drawDeck = function(cardIndex) {
    this.hand.push(this.deck[cardIndex]);
    this.deck.splice(cardIndex, 1);
  };

  deckCard = function(cardIndex) {
    this.deck.push(this.hand[cardIndex]);
    this.hand.splice(cardIndex, 1);
  };

  deckCardBottom = function(cardIndex) {
    this.deck.unshift(this.hand[cardIndex]);
    this.hand.splice(cardIndex, 1);
  };

  discardCard = function(cardIndex) {
    this.discard.push(this.hand[cardIndex]);
    this.hand.splice(cardIndex, 1);
  };

  drawDiscard = function(cardIndex) {
    this.hand.push(this.discard[cardIndex]);
    this.discard.splice(cardIndex, 1);
  };

  commitCard = function(cardIndex) {
    this.commit.main = this.hand[cardIndex];
    this.hand.splice(cardIndex, 1);
  };

  discardCommit = function() {
    this.discard.push(this.commit.main);
    this.commit.main = null;
    this.commit.reveal = false;
  };

  cancelCommit = function() {
    this.hand.push(this.commit.main);
    this.commit.main = null;
    this.commit.reveal = false;
  };

  revealCommit = function() {
    this.commit.reveal
      ? (this.commit.reveal = false)
      : (this.commit.reveal = true);
  };
}
