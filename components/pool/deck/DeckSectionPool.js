import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import CardTemplate from '../../card/CardTemplate';
import DeckCardWrapper from './DeckCardWrapper';

export default class DeckSectionPool extends Component {
  constructor(props) {
    super(props);
  }

  renderDeck = () => {
    if (this.props.pool && this.props.pool.deck) {
      return this.props.pool.deck.map((card, index) => (
        <div key={index}>
          <DeckCardWrapper card={card} />
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
            slidesToShow: 3,
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
    return (
      <Fragment>
        <section className='carousel-section'>
          <div className='carousel-header'>
            <h1>
              Deck ({this.props.pool.deck ? this.props.pool.deck.length : '...'}
              )
            </h1>
            {/* <a>Draw 1 Card</a> */}
          </div>
          <div className='carousel-grid-wrapper'>{this.renderDeck()}</div>
        </section>
      </Fragment>
    );
  }
}
