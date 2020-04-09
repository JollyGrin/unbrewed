import React, { Component, Fragment } from 'react'
import Slider from 'react-slick'
import PlayTestCard from './PlayTestCard'

export default class Hand extends Component {
  glider = React.createRef()

  renderHand = () => {
    if (this.props.hand) {
      return this.props.hand.map((card, index) => (
        <div key={Math.random()}>
          <PlayTestCard
            card={card}
            handIndex={index}
            discardCard={this.props.discardCard}
            commitCard={this.props.commitCard}
            modal={this.props.modal}
            deckCard={this.props.deckCard}
          />
        </div>
      ))
    }
  }

  componentDidMount () {}
  render () {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    }

    return (
      <Fragment>
        <Slider {...settings}>{this.renderHand()}</Slider>

        <style jsx>{`
          .button {
            font-family: BebasNeueRegular;
            background-color: #4caf50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
          }
        `}</style>
      </Fragment>
    )
  }
}
