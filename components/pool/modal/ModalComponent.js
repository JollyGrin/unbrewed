import React, { Component, Fragment } from 'react';
import dynamic from 'next/dynamic';
import CardTemplate from '../../card/CardTemplate';
import cardMock from '../../../assets/mock/card.json';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  conditionalRender = {
    faceDownCard: () => (
      <div key={Math.random()} className='facedownCard'>
        <span>(facedown)</span>
      </div>
    ),
    faceUpCard: (card) => <CardTemplate key={Math.random()} card={card} />,
    cardDisplay: (card, reveal) => {
      if (reveal) {
        return this.conditionalRender.faceUpCard(card);
      } else {
        return this.conditionalRender.faceDownCard();
      }
    },
  };

  getCommits = () => {
    if (this.props.state.gameState && this.props.state.gameState.players) {
      const { players } = this.props.state.gameState;

      const playersArray = Object.entries(players);

      if (playersArray.length === 0) {
        return;
      }

      return playersArray.map((player, index) => {
        if (player[1].commit && player[1].commit.main) {
          return this.conditionalRender.cardDisplay(
            player[1].commit.main,
            player[1].commit.reveal
          );
        }
      });
    }
  };

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
              <Slider {...settings}>{this.getCommits()}</Slider>
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
