import React, { Component } from 'react'
import Link from 'next/link'
import DeckPool from '../lib/classes/DeckPool'
import { makeDeck, shuffleDeck } from '../lib/deckActions'
import ThrallDeck from '../lib/thrall.json'
import Card from '../components/Card'

export default class local extends Component {
  constructor (props) {
    super(props)
    this.handNumber = React.createRef()
    this.state = {
      pool: {}
    }
  }

  decklist = React.createRef()
  loadDeckInput = React.createRef()

  loadNewDeck = () => {
    const newInput = JSON.parse(this.loadDeckInput.current.value)

    const formattedDeck = makeDeck(newInput)
    // Shuffle Deck
    const shuffledDeck = shuffleDeck(formattedDeck)
    // load a new Deck Pool
    let pool = new DeckPool(shuffledDeck)
    // set the state with new Pool
    this.setState({ pool: pool })
  }

  toggleDeck = () => {
    this.decklist.current.classList.toggle('hide')
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

  drawCard = event => {
    event.preventDefault()

    const newState = this.state.pool
    newState.draw()
    this.setState({ pool: newState })
  }

  discardCard = () => {
    event.preventDefault()

    const newState = this.state.pool

    const selection = this.handNumber.current.value - 1
    const selectedCard = newState.hand[selection]

    newState.discardCard(selectedCard)
    this.handNumber.current.value = ''

    this.setState({ pool: newState })
  }

  drawDiscard = () => {
    event.preventDefault()

    const newState = this.state.pool

    const selection = this.handNumber.current.value - 1
    const selectedCard = newState.discard[selection]

    newState.drawDiscard(selectedCard)
    this.handNumber.current.value = ''

    this.setState({ pool: newState })
  }

  componentDidMount () {
    this.onInit()
    console.log(this.handNumber.current.value)
  }

  render () {
    return (
      <div>
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
                      <li key={obj.title + Math.random()}>
                        <Card card={obj} />
                      </li>
                    ))
                  : ''}
              </ol>
            </div>
          </div>

          <hr />

          <h2 onClick={this.toggleDeck}>
            DECK - {this.state.pool.deck ? this.state.pool.deck.length : ''}
          </h2>
          <ol ref={this.decklist} className='hide'>
            {this.state.pool.deck
              ? this.state.pool.deck.map(obj => (
                  <li key={obj.title + Math.random()}>
                    <Card card={obj} />
                  </li>
                ))
              : 'no deck'}
          </ol>
        </div>

        <center>
          <textarea ref={this.loadDeckInput} className='loadDeck'></textarea>
          <br />
          <a className='button' onClick={this.loadNewDeck}>
            Load Deck
          </a>
        </center>

        <style jsx>{`
          .mainpage {
            padding: 5rem;
          }

          li {
            margin-bottom: 0.5rem;
          }

          .loadDeck {
            width: 70vw;
            height: 10rem;
            font-size: 0.6rem !important;
          }

          hr {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .hide {
            display: none;
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
