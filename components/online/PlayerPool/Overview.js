import React, { Component, Fragment } from 'react'
import DeckPool from '../../../lib/classes/DeckPool'

export default class Overview extends Component {
  constructor (props) {
    super(props)
    this.loadDeckInput = React.createRef()
    this.state = {
      pool: {}
    }
    this.modal = false
    this.handView = true
    this.deckView = false
  }

  render () {
    return (
      <Fragment>
        <h1>Test</h1>
      </Fragment>
    )
  }
}
