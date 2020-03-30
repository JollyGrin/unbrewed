function makeDeck (specs) {
  const { cards } = specs
  let deck = []

  cards.forEach(spell => {
    const { quantity } = spell
    let i

    for (i = 0; i < quantity; i++) {
      deck.push(spell)
    }
  })

  return deck
}

function shuffleDeck (deck) {
  deck.sort(() => Math.random() - 0.5)
  return deck
}

export { makeDeck, shuffleDeck }
