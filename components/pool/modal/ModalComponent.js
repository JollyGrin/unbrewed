import React, { Component, Fragment } from 'react';
import dynamic from 'next/dynamic';
import CardTemplate from '../../card/CardTemplate';
import cardMock from '../../../assets/mock/card.json';

export default class ModalComponent extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
    };

    const Slider = dynamic(import('react-slick'));
    return (
      <Fragment>
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-top'></div>
            <div className='modal-mid'>
              <Slider {...settings}>
                <CardTemplate card={cardMock} />
                <CardTemplate card={cardMock} />
              </Slider>
            </div>
            <div className='modal-bot'>
              <a>Cancel</a>
              <a>Discard</a>
              <a>Flip</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
