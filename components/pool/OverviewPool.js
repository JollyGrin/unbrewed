import React, { Component, Fragment } from 'react';
import PlayerBox from './PlayerBox';
import dynamic from 'next/dynamic';
import fetch from 'axios';
import CardTemplate from '../card/CardTemplate';

export default class OverviewPool extends Component {
  constructor(props) {
    super(props);
    this.connection = false;
  }

  renderPlayers = () => {
    if (this.props && this.props.state && this.props.state.gameState) {
      const playersArray = Object.entries(this.props.state.gameState.players);
      if (playersArray.length === 0) {
        return;
      }
      return playersArray.map((player, index) => (
        <div key={index}>
          {player[1].commit && player[1].commit.main ? (
            this.conditionalRender.cardDisplay(
              player[1].commit.main,
              player[1].commit.reveal
            )
          ) : (
            <PlayerBox player={player[0]} deck={player[1]} />
          )}
        </div>
      ));
    }
  };

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

  connectWS = (e) => {
    e.preventDefault();
    const { lobby, player } = this.props.urlParams;
    this.connection = true;
    this.props.wsClient.connect(lobby, player, this.props.processState);
  };

  componentDidMount() {
    fetch
      .get(`https://api.unbrewed.xyz/lobby/${this.props.urlParams.lobby}`)
      .then((res) => {
        console.log('initiated lobby to ' + this.props.urlParams.lobby);
      });
  }

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
      ssr: false,
    });
    return (
      <Fragment>
        <section id='section-overview'>
          <div className='overview-header'>
            <h1>
              {this.props.urlParams.lobby} <span>//</span>{' '}
              {this.props.urlParams.player}
            </h1>
          </div>
          <div className='overview-players'>
            {this.connection ? (
              <Slider {...settings}>{this.renderPlayers()}</Slider>
            ) : (
              <center>
                <a
                  onClick={(e) => this.connectWS(e)}
                  className='connectToLobby-button'
                >
                  Connect to Lobby
                </a>
              </center>
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}
