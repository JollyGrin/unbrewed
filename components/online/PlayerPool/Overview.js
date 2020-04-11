import React, { Component, Fragment } from 'react'
import PoolLayout from './PoolLayout'

// DECK ACTIONS
import DeckPool from '../../../lib/classes/DeckPool'
import { makeDeck, shuffleDeck } from '../../../lib/deckActions'
import ThrallDeck from '../../../lib/decks/thrall.json'

// DOM ELEMENTS
import HeroHeader from '../../playtest/HeroHeader'

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

  conditionalRender = {
    heroHeader: () => {
      if (this.state.pool.hero) {
        return (
          <HeroHeader
            hero={this.state.pool.hero}
            sidekick={this.state.pool.sidekick}
          />
        )
      }
    },
    handEye: () => {
      if (this.handView) {
        return <i className='fa fa-eye'></i>
      } else {
        return <i className='fa fa-eye-slash'></i>
      }
    },
    handLength: () => {
      if (this.state.pool.hand) {
        return this.state.pool.hand.length
      }
    }
  }

  domState = {
    hand: {
      close: e => {
        e.preventDefault()
        this.handView = false
        this.setState({ pool: this.state.pool })
      },
      open: e => {
        e.preventDefault()
        this.handView = true
        this.setState({ pool: this.state.pool })
      }
    }
  }

  domActions = {
    displayHand: e => {
      if (this.handView) {
        this.domState.hand.close(e)
      } else {
        this.domState.hand.open(e)
      }
    }
  }

  deckActions = {
    drawCard: () => {
      if (!this.state.pool.deck.length <= 0) {
        this.state.pool.draw()
        this.processState()
      } else {
        alert('Your deck is empty')
      }
    }
  }

  processState = () => {
    this.props.wsClient.sendData(this.state.pool)
    this.setState({ pool: this.state.pool })
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
        {this.conditionalRender.heroHeader()}
        <hr />
        <div id='hand-controls' className='container'>
          <div className='item'>
            <h1>
              <a onClick={e => this.domActions.displayHand(e)}>
                {this.conditionalRender.handEye()} Hand -{' '}
                {this.conditionalRender.handLength()}
              </a>
            </h1>
          </div>
          <div className='item'>
            <a className='button' onClick={this.deckActions.drawCard}>
              Draw 1 Card
            </a>
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
          }

          .item {
            align-self: auto;
            margin: auto;
          }

          h1 h3 {
            font-family: 'Rubik';
          }
        `}</style>
      </PoolLayout>
    )
  }
}
