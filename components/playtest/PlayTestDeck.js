import React, { Component, Fragment } from 'react'
import CardTemplate from '../CardTemplate'

export default class PlayTestDeck extends Component {
  constructor (props) {
    super(props)
    this.state = { deck: {} }
  }

  renderDeck = () => {
    if (this.props.deck) {
      return this.props.deck.map((card, index) => (
        <li key={Math.random()}>
          <div className='dropdown'>
            <span>{card.title}</span>
            <div className='dropdown-content'>
              <div className='nav'>
                <a>
                  <i className='fas fa-angle-up'></i>
                </a>
                <a></a>
                <a onClick={() => console.log('hi')}>
                  <i className='fas fa-angle-down'></i>
                </a>
              </div>
              <CardTemplate card={card} />
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

          .nav {
            display: flex;
            opacity: 0.05;
          }

          .nav a {
            align-self: auto;
            margin: auto;
          }
        `}</style>
      </Fragment>
    )
  }
}
