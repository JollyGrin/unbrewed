import React, { Component, Fragment } from 'react'
import PoolLayout from './PoolLayout'

// DECK ACTIONS
import DeckPool from '../../../lib/classes/DeckPool'
import { makeDeck, shuffleDeck } from '../../../lib/deckActions'
import ThrallDeck from '../../../lib/decks/thrall.json'

// DOM ELEMENTS
import HeroHeader from '../../playtest/HeroHeader'
import PoolHand from './PoolHand'
import PoolModal from './PoolModal'

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
    },
    handDisplay: () => {
      if (this.handView) {
        return (
          <PoolHand
            hand={this.state.pool.hand}
            discardCard={this.deckActions.discardCard}
            commitCard={this.commitActions.commit}
            deckCard={this.deckCard}
          />
        )
      }
    },
    modalDisplay: () => {
      if (this.modal) {
        return (
          <div id='myModal' className='modal'>
            <div className='modal-content'>{this.domState.modal.load()}</div>
          </div>
        )
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
    },
    modal: {
      close: () => {
        this.modal = false
      },
      open: () => {
        this.modal = true
      },
      load: () => {
        if (this.modal) {
          console.log('load modal')
          return (
            <PoolModal
              state={this.props.state}
              modal={this.domState.modal}
              card={this.state.pool.commit.main}
              reveal={this.state.pool.commit.reveal}
              actions={this.commitActions}
            />
          )
        } else {
          return
        }
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
    },
    discardCard: cardIndex => {
      this.state.pool.discardCard(cardIndex)
      this.processState()
    },
    deckCard: cardIndex => {
      this.state.pool.deckCard(cardIndex)
      this.processState()
    }
  }

  commitActions = {
    commit: cardIndex => {
      this.state.pool.commitCard(cardIndex)
      this.modal = true
      this.processState()
    },
    cancel: () => {
      this.state.pool.cancelCommit()
      this.modal = false
      this.processState()
    },
    discard: () => {
      this.state.pool.discardCommit()
      this.modal = false
      this.processState()
    },
    reveal: () => {
      this.state.pool.revealCommit()
      this.processState()
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
        {this.conditionalRender.modalDisplay()}
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
        <div className='show-hand'>{this.conditionalRender.handDisplay()}</div>

        <style global jsx>{`
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

          /* The Modal (background) */
          .modal {
            display: block; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
          }

          /* Modal Content/Box */
          .modal-content {
            background-color: #2c3e50;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            border-radius: 2rem;
            width: 87%; /* Could be more or less, depending on screen size */
            box-shadow: 1rem 1rem 1rem #000;
          }
        `}</style>
      </PoolLayout>
    )
  }
}
