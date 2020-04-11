import React, { Component, Fragment } from 'react'
import PoolLayout from './PoolLayout'

import DeckPool from '../../../lib/classes/DeckPool'
import { makeDeck, shuffleDeck } from '../../../lib/deckActions'
import ThrallDeck from '../../../lib/decks/thrall.json'

export default class Overview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pool: {}
    }

    this.modal = false
    this.handView = true
    this.deckView = false
  }

  processState = () => {
    this.props.wsClient.sendData(this.state.pool)
    this.setState({ pool: this.state.pool })
  }

  sendMessage = () => {
    const testMSG = { test: this.textarea.current.value }
    console.log('testMSG', testMSG)
    this.props.wsClient.sendData(testMSG)
  }

  onInit = () => {
    const formattedDeck = makeDeck(ThrallDeck)
    const shuffledDeck = shuffleDeck(formattedDeck)
    let pool = new DeckPool(shuffledDeck, ThrallDeck.hero, ThrallDeck.sidekick)

    this.setState({ pool: pool })
  }

  componentDidMount () {
    this.onInit()
  }

  render () {
    return (
      <PoolLayout>
        <h1>Hi</h1>
        {JSON.stringify(this.state.pool.hero)}
        <a onClick={() => this.processState()}>SEND</a>

        <style jsx>{``}</style>
      </PoolLayout>
    )
  }
}
