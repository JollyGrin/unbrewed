import ThrallDeck from '../../lib/decks/thrall.json'

module.exports = async (req, res) => {
  res.status(200).json(ThrallDeck)
}
