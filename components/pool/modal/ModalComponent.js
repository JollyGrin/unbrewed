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

    const displayStyle = {
      display: this.props.modalView ? 'block' : 'none',
    };
    return (
      <Fragment>
        <div className='modal' style={displayStyle}>
          <div className='modal-content'>
            <div className='modal-top'></div>
            <div className='modal-mid'>
              <Slider {...settings}>
                <CardTemplate card={cardMock} />
                <CardTemplate card={cardMock} />
              </Slider>
            </div>
            <div className='modal-bot'>
              <a onClick={() => this.props.deckActions.commitActions.cancel()}>
                <i className='far fa-window-close' /> Cancel
              </a>
              <a onClick={() => this.props.deckActions.commitActions.discard()}>
                <i className='fas fa-angle-down' /> Discard
              </a>
              <a onClick={() => this.props.deckActions.commitActions.reveal()}>
                <i className='fas fa-book-open' /> Flip
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
