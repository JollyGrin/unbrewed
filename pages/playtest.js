import React, { Component } from 'react'
import DeckPool from '../lib/classes/DeckPool'
import { makeDeck, shuffleDeck } from '../lib/deckActions'
import ThrallDeck from '../lib/thrall.json'
import Layout from '../components/playtest/Layout'
import Hand from '../components/playtest/Hand'
import Discard from '../components/playtest/Discard'
import Modal from '../components/playtest/Modal'

export default class playtest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pool: {}
    }
    this.modal = false
  }

  modalComponent = {
    close: () => {
      this.modal = false
    },
    open: () => {
      this.modal = true
    },
    load: () => {
      if (this.modal) {
        console.log('true!!!')
        return (
          <Modal
            modal={this.modalComponent}
            card={this.state.pool.commit.main}
            actions={this.commitActions}
          />
        )
      } else {
        return
      }
    }
  }

  commitActions = {
    commit: cardIndex => {
      this.state.pool.commitCard(cardIndex)
      this.modal = true
      this.setState({ pool: this.state.pool })
    },
    cancel: () => {
      this.state.pool.cancelCommit()
      this.modal = false
      this.setState({ pool: this.state.pool })
    },
    discard: () => {
      this.state.pool.discardCommit()
      this.modal = false
      this.setState({ pool: this.state.pool })
    }
  }

  commitCard = cardIndex => {
    this.state.pool.commitCard(cardIndex)
    this.modal = true
    this.setState({ pool: this.state.pool })
  }

  drawCard = event => {
    if (event) {
      event.preventDefault()
    }

    this.state.pool.draw()
    this.setState({ pool: this.state.pool })
  }

  discardCard = cardIndex => {
    this.state.pool.discardCard(cardIndex)
    this.setState({ pool: this.state.pool })
  }

  drawDiscard = cardIndex => {
    this.state.pool.drawDiscard(cardIndex)
    this.setState({ pool: this.state.pool })
  }

  onInit = () => {
    // Take Thrall Spec & convert to 30 card deck
    const formattedDeck = makeDeck(ThrallDeck)
    // Shuffle Deck
    const shuffledDeck = shuffleDeck(formattedDeck)
    // load a new Deck Pool
    let pool = new DeckPool(shuffledDeck)
    // set the state with new Pool
    this.setState({ pool: pool })
  }

  componentDidMount () {
    this.onInit()
  }

  render () {
    const styles = {
      modalDisplay: {
        // display: block; /* Hidden by default */
        display: `${this.modal ? 'block' : 'none'}`
      }
    }

    return (
      <Layout>
        <div id='myModal' className='modal' style={styles.modalDisplay}>
          <div className='modal-content'>{this.modalComponent.load()}</div>
        </div>

        <h1>Play Test</h1>
        <hr />
        <div className='container'>
          <div className='item'>
            <h1>
              Hand -{' '}
              {this.state.pool.hand
                ? this.state.pool.hand.length
                : 'not loaded'}
            </h1>
          </div>
          <div className='item'>
            <a className='button' onClick={this.drawCard}>
              Draw 1 Card
            </a>
          </div>
        </div>
        <Hand
          hand={this.state.pool.hand}
          discardCard={this.discardCard}
          modal={this.modalComponent}
          commitCard={this.commitActions.commit}
        />
        <hr />
        <h1>
          Discard -{' '}
          {this.state.pool.discard
            ? this.state.pool.discard.length
            : 'not loaded'}
        </h1>
        <Discard
          discard={this.state.pool.discard}
          drawDiscard={this.drawDiscard}
        />
        <hr />
        <h1>
          Deck -{' '}
          {this.state.pool.deck ? this.state.pool.deck.length : 'not loaded'}
        </h1>
        <style jsx>{`
          .container {
            display: flex;
          }

          .item {
            align-self: auto;
            margin: auto;
          }

          .button {
            font-family: BebasNeueRegular;
            color: #fff !important;
            text-transform: uppercase;
            text-decoration: none;
            background: #1e90ff;
            padding: 0.7rem;
            border-radius: 3rem;
            display: inline-block;
            border: none;
            transition: all 0.4s ease 0s;
          }

          .button :hover {
            background: #434343;
            letter-spacing: 1px;
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
            transition: all 0.4s ease 0s;
          }

          /* The Modal (background) */
          .modal {
            // display: block; /* Hidden by default */
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
      </Layout>
    )
  }
}
