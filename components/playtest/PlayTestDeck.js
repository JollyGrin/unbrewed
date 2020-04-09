import React, { Component, Fragment } from 'react'
import CardTemplate from '../CardTemplate'

export default class PlayTestDeck extends Component {
  constructor (props) {
    super(props)
    this.state = { deck: {} }
  }

  drawDeck = cardIndex => {
    this.props.drawDeck(cardIndex)
  }

  renderDeck = () => {
    if (this.props.deck) {
      return this.props.deck.map((card, index) => (
        <li key={Math.random()}>
          <div className='dropdown'>
            <span>{card.title}</span>
            <div className='dropdown-content'>
              <div className='navDeck'>
                <center>
                  <a onClick={() => this.drawDeck(index)}>
                    <i className='deckIcon fas fa-hands'></i>
                  </a>
                </center>
              </div>
              <CardTemplate className='cardTemplate' card={card} />
            </div>
          </div>
        </li>
      ))
    }
  }

  loadDeckState = async () => {
    return this.props.deck
  }

  componentDidMount () {
    console.log('does prop load?', this.props.deck)
    this.loadDeckState().then(obj => {
      this.setState({ deck: obj })
    })
  }

  render () {
    const { deck } = this.props
    return (
      <Fragment>
        <ol>{this.renderDeck()}</ol>

        <style global jsx>{`
          ol {
            font-family: Archivo Narrow;
          }

          .navDeck {
            display: flex;
            opacity: 0.8;
            margin-bottom: 0.5rem;
          }

          .navDeck a {
            align-self: auto;
            margin: auto;
          }

          .navDeck a .deckIcon {
            position: absolute;
            top: 0;
            right: 1rem;
            font-size: 2rem;
          }
        `}</style>
      </Fragment>
    )
  }
}
