import React, { Component } from 'react'
import Link from 'next/link'
import DeckPool from '../lib/classes/DeckPool'
import { makeDeck, shuffleDeck } from '../lib/deckActions'
import ThrallDeck from '../lib/thrall.json'
import io from 'socket.io-client'
import fetch from 'isomorphic-fetch'
import Card from '../components/Card'

export default class lobby extends Component {
  constructor (props) {
    super(props)
    this.handNumber = React.createRef()
    this.state = {
      pool: {}
    }
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

  // redrawState = callback => {
  //   const newState = this.state.pool
  //   newState.callback()
  //   this.setState({ pool: newState })
  // }

  drawCard = event => {
    event.preventDefault()

    this.state.pool.draw()
    this.setState({ pool: this.state.pool })
  }

  discardCard = () => {
    event.preventDefault()

    const selection = this.handNumber.current.value - 1
    const selectedCard = this.state.pool.hand[selection]

    this.state.pool.discardCard(selectedCard)
    this.handNumber.current.value = ''

    this.setState({ pool: this.state.pool })
  }

  drawDiscard = () => {
    event.preventDefault()

    const selection = this.handNumber.current.value - 1
    const selectedCard = this.state.pool.discard[selection]

    this.state.pool.drawDiscard(selectedCard)
    this.handNumber.current.value = ''

    this.setState({ pool: this.state.pool })
  }

  componentDidMount () {
    this.onInit()
    console.log(this.handNumber.current.value)
  }

  render () {
    return (
      <div>
        <Link href='/'>
          <a>
            <h1>unbrewed.xyz</h1>
          </a>
        </Link>

        <hr />
        <div className='mainpage'>
          <h1>Play Unmatched</h1>

          <hr />

          <div className='container'>
            <div className='item'>
              <a href='#' className='button' onClick={this.drawCard}>
                Draw Card
              </a>
            </div>
            <div className='item'>
              <p>put the number from hand you wish to discard</p>
              <input ref={this.handNumber} placeholder='#'></input>
              <a href='#' className='button' onClick={this.discardCard}>
                Discard Card
              </a>
              <a href='#' className='button' onClick={this.drawDiscard}>
                Draw Discard
              </a>
            </div>
          </div>

          <hr />

          <div className='container'>
            <div className='item'>
              <h2>
                HAND - {this.state.pool.hand ? this.state.pool.hand.length : ''}
              </h2>
              <ol>
                {this.state.pool.hand
                  ? this.state.pool.hand.map(obj => (
                      <li key={obj.title + Math.random()}>
                        <Card card={obj} />
                      </li>
                    ))
                  : ''}
              </ol>
            </div>
            <div className='item'>
              <h2>
                Discard -{' '}
                {this.state.pool.discard ? this.state.pool.discard.length : ''}
              </h2>
              <ol>
                {this.state.pool.discard
                  ? this.state.pool.discard.map(obj => (
                      <li key={obj.title + Math.random()}>{obj.title}</li>
                    ))
                  : ''}
              </ol>
            </div>
          </div>

          <hr />

          <h2>
            DECK - {this.state.pool.deck ? this.state.pool.deck.length : ''}
          </h2>
          <ol>
            {this.state.pool.deck
              ? this.state.pool.deck.map(obj => (
                  <li key={obj.title + Math.random()}>{obj.title}</li>
                ))
              : 'no deck'}
          </ol>
        </div>

        <style jsx>{`
          .mainpage {
            padding: 5rem;
          }

          hr {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .button {
            background-color: #4caf50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }

          input {
            width: 3rem;
            font-size: 2rem;
          }

          .container {
            display: flex;
          }

          .item {
            align-self: auto;
            margin: auto;
          }
        `}</style>
      </div>
    )
  }
}
