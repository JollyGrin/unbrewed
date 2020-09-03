export const revertToInput = (gameState) => {
  let oldDeck = {
    creator: gameState.author,
    family_id: gameState.deckid,
    name: gameState.deckName,
    note: gameState.deckNote,
    deck_data: {
      cards: gameState.cards,
      hero: gameState.hero,
      sidekick: gameState.sidekick,
    },
  };
  return oldDeck;
};
