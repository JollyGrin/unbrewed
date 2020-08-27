import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import CardTemplate from '../../card/CardTemplate';
import HandCardWrapper from './HandCardWrapper';

export default class HandPool extends Component {
  constructor(props) {
    super(props);
  }

  renderHand = () => {
    if (this.props.pool && this.props.pool.hand) {
      return this.props.pool.hand.map((card, index) => (
        <div key={index}>
          <HandCardWrapper card={card} />
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
        <section id='section-hand'>
          <div className='hand-header'>
            <h1>Hand</h1>
            <a>Draw 1 Card</a>
          </div>
          <div className='hand-wrapper'>
            <Slider {...settings}>{this.renderHand()}</Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
