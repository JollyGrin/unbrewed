import React, { Component, Fragment } from 'react';
import dynamic from 'next/dynamic';
import CardTemplate from '../../card/CardTemplate';
import HandCardWrapper from './HandCardWrapper';

export default class HandPool extends Component {
  constructor(props) {
    super(props);
  }

  drawCard = () => {
    this.props.deckActions.drawCard();
  };

  renderHand = () => {
    if (this.props.pool && this.props.pool.hand) {
      return this.props.pool.hand.map((card, index) => (
        <div key={index}>
          <HandCardWrapper
            index={index}
            card={card}
            deckActions={this.props.deckActions}
            deckView={this.props.deckView}
          />
        </div>
      ));
    }
  };

  render() {
    var settings = {
      dots: false,
      arrows: false,
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
            dots: true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    const Slider = dynamic(import('react-slick'));
    return (
      <Fragment>
        <section className='carousel-section'>
          <div className='carousel-header'>
            <h1>
              Hand ({this.props.pool.hand ? this.props.pool.hand.length : '...'}
              )
            </h1>
            <a onClick={() => this.drawCard()}>Draw 1 Card</a>
          </div>
          <div className='carousel-wrapper'>
            <Slider {...settings}>{this.renderHand()}</Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
