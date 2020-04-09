import React, { Component, Fragment } from 'react'
import CardTemplate from '../CardTemplate'

export default class PlayTestCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      check: false
    }
  }

  displayText = () => {
    const { basicText, immediateText, duringText, afterText } = this.props.card
  }

  moveHandToDiscard = () => {
    this.props.discardCard(this.props.handIndex)
  }

  commitCard = () => {
    this.props.commitCard(this.props.handIndex)
  }

  deckCard = () => {
    this.props.deckCard(this.props.handIndex)
  }

  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    const styles = {
      bgImg: {
        backgroundImage: `url(${
          this.props.card.imageUrl
            ? this.props.card.imageUrl
            : 'https://picsum.photos/200/300'
        })`
      }
    }
    return (
      <Fragment>
        <div className='nav'>
          <a onClick={() => this.commitCard()}>
            <i className='fas fa-angle-up'></i>
          </a>
          <a onClick={() => this.deckCard()}>
            <i className='fas fa-minus-circle'></i>
          </a>
          <a onClick={() => this.moveHandToDiscard()}>
            <i className='fas fa-angle-down'></i>
          </a>
        </div>
        <CardTemplate card={this.props.card} />

        <style jsx>{`
          .card-text span {
            font-family: Roboto Condensed;
            font-size: 0.7rem;
            letter-spacing: -0.5px;
            line-height: -100;
          }

          .flexbox {
            display: flex;
          }
          .nav {
            display: flex;
            opacity: 0.05;
          }

          .nav a {
            align-self: auto;
            margin: auto;
          }

          .item {
            align-self: auto;
            margin: auto;
          }

          .nav:hover {
            opacity: 1;
          }

          .help {
            position: absolute;
            top: 1.5rem;
            font-size: 0.7rem;
          }

          .value {
            font-size: 2rem;
            margin-top: 3rem;
          }

          .boost {
            flex-direction: row-reverse;
            display: flex;
          }

          .base {
            font-family: BebasNeueRegular;
            height: 17rem;
            margin: 0.1rem;
            border-radius: 0.5rem;
          }
          .content {
            padding: 0.5rem;
          }

          h1 {
            position: absolute;
            top: 1rem;
            font-size: 1.4rem;
          }

          .image-container {
            width: 100%;
            height: 5rem;
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-position: center center;
            background-color: black;
            border: 3px solid black;
            margin-top: 1rem;
            margin-left: 1rem;
          }

          .scheme {
            background-color: #fcbd71;
          }
          .attack {
            background-color: #dc3034;
          }
          .defence {
            background-color: #2c76ac;
            color: white;
          }
          .versatile {
            background-color: #6c4e8d;
            color: white;
          }
        `}</style>
      </Fragment>
    )
  }
}
