import React, { Component, Fragment } from 'react';
import dynamic from 'next/dynamic';
import DiscardCardWrapper from './DiscardCardWrapper';

export default class DiscardPool extends Component {
  constructor(props) {
    super(props);
  }

  renderDiscard = () => {
    if (this.props.pool && this.props.pool.discard) {
      return this.props.pool.discard.map((card, index) => (
        <div key={index}>
          <DiscardCardWrapper card={card} />
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

    const Slider = dynamic(import('react-slick'), {
      ssr: false
    })
    return (
      <Fragment>
        <section className='carousel-section'>
          <div className='carousel-header'>
            <h1>
              Discard (
              {this.props.pool.discard ? this.props.pool.discard.length : '...'}
              )
            </h1>
            {/* <a>Draw 1 Card</a> */}
          </div>
          <div className='carousel-wrapper'>
            <Slider {...settings}>{this.renderDiscard()}</Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
