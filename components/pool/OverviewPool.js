import React, { Component, Fragment } from 'react';
import PlayerBox from './PlayerBox';
import dynamic from 'next/dynamic';

export default class OverviewPool extends Component {
  constructor(props) {
    super(props);
  }

  renderPlayers = () => {
    if (this.props && this.props.state) {
      const playersArray = Object.entries(this.props.state.gameState.players);
      return playersArray.map((player, index) => (
        <div key={index}>
          <PlayerBox player={player[0]} deck={player[1]} />
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
        <section id='section-overview'>
          <div className='overview-header'>
            <h1>
              {this.props.urlParams.lobby} <span>//</span>{' '}
              {this.props.urlParams.player}
            </h1>
          </div>
          <div className='overview-players'>
            <Slider {...settings}>{this.renderPlayers()}</Slider>
          </div>
        </section>
      </Fragment>
    );
  }
}
