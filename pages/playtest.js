import React, { Component } from 'react'
import DeckPool from '../lib/classes/DeckPool'
import { makeDeck, shuffleDeck } from '../lib/deckActions'
import Layout from '../components/playtest/Layout'
import Hand from '../components/playtest/Hand'
import Discard from '../components/playtest/Discard'
import Modal from '../components/playtest/Modal'

import ThrallDeck from '../lib/decks/thrall.json'
import MandDeck from '../lib/decks/mandalorian.json'
import PokeDeck from '../lib/decks/pokemontrainer.json'
import DannyDeck from '../lib/decks/dannyphantom.json'
import HeroHeader from '../components/playtest/HeroHeader'

export default class playtest extends Component {
  constructor (props) {
    super(props)
    this.loadDeckInput = React.createRef()
    this.state = {
      pool: {}
    }
    this.modal = false
    this.handView = true
  }

  loadNewDeck = deck => {
    let newInput

    if (deck) {
      newInput = deck
    } else {
      newInput = JSON.parse(this.loadDeckInput.current.value)
    }

    const formattedDeck = makeDeck(newInput)
    // Shuffle Deck
    const shuffledDeck = shuffleDeck(formattedDeck)
    // load a new Deck Pool
    let pool = new DeckPool(shuffledDeck, newInput.hero, newInput.sidekick)
    // set the state with new Pool
    this.setState({ pool: pool })
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

  handComponent = {
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

  drawCard = () => {
    if (!this.state.pool.deck.length <= 0) {
      this.state.pool.draw()
      this.setState({ pool: this.state.pool })
    } else {
      alert('Your deck is empty')
    }
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
    let pool = new DeckPool(shuffledDeck, ThrallDeck.hero, ThrallDeck.sidekick)
    // set the state with new Pool

    console.log('poooo', pool)
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
      },
      handDisplay: {
        display: `${this.handView ? '' : 'none'}`
      }
    }

    return (
      <Layout>
        <div id='myModal' className='modal' style={styles.modalDisplay}>
          <div className='modal-content'>{this.modalComponent.load()}</div>
        </div>
        {this.state.pool.hero ? (
          <HeroHeader
            hero={this.state.pool.hero}
            sidekick={this.state.pool.sidekick}
          />
        ) : (
          <h1>Load Deck</h1>
        )}
        <hr />
        <div className='container'>
          <div className='item'>
            <h1>
              <a
                onClick={e => {
                  this.handView
                    ? this.handComponent.close(e)
                    : this.handComponent.open(e)
                }}
              >
                {this.handView ? (
                  <i className='fa fa-eye'></i>
                ) : (
                  <i className='fa fa-eye-slash'></i>
                )}{' '}
                Hand
              </a>{' '}
              -{' '}
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
        <div className='show-hand' style={styles.handDisplay}>
          <Hand
            hand={this.state.pool.hand}
            discardCard={this.discardCard}
            modal={this.modalComponent}
            commitCard={this.commitActions.commit}
          />
        </div>
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
        <hr />
        <center>
          <textarea ref={this.loadDeckInput} className='loadDeck'></textarea>
          <br />
          <a className='button' onClick={this.loadNewDeck}>
            Load Deck
          </a>
        </center>
        <br /> <br />
        <div className='container'>
          <div className='item'>
            <a onClick={() => this.loadNewDeck(ThrallDeck)} className='button'>
              Thrall
            </a>
          </div>
          <div className='item'>
            <a href='http://reddit.com/r/unbrewed'>
              <h3>Submit your Deck on /r/Unbrewed to be displayed here!</h3>
            </a>
          </div>
          {/* <div className='item'>
            <a onClick={() => this.loadNewDeck(MandDeck)} className='button'>
              Mandalorian
            </a>
          </div>
          <div className='item'>
            <a onClick={() => this.loadNewDeck(PokeDeck)} className='button'>
              Pokemon Trainer
            </a>
          </div>
          <div className='item'>
            <a onClick={() => this.loadNewDeck(DannyDeck)} className='button'>
              Danny Phantom
            </a>
          </div> */}
        </div>
        <style jsx>{`
          h1 h3 {
            font-family: 'Rubik';
          }

          .loadDeck {
            width: 70vw;
            height: 10rem;
            font-size: 0.6rem !important;
          }

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
