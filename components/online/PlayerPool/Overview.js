import React, { Component, Fragment } from 'react'
import DeckPool from '../../../lib/classes/DeckPool'
import PoolLayout from './PoolLayout'

export default class Overview extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pool: {}
    }
    this.loadDeckInput = React.createRef()
    this.textarea = React.createRef()
    this.modal = false
    this.handView = true
    this.deckView = false
  }

  sendMessage = () => {
    const testMSG = { test: this.textarea.current.value }
    console.log('testMSG', testMSG)
    this.props.wsClient.sendData(testMSG)
  }

  render () {
    return (
      <PoolLayout lobby={this.props.lobby} player={this.props.player}>
        <style jsx>{``}</style>
      </PoolLayout>
    )
  }
}
