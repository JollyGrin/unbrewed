import ThrallDeck from '../../lib/thrall.json'

module.exports = async (req, res) => {
  res.status(200).json(ThrallDeck)
}
