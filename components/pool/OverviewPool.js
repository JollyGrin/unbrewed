import React, { Component, Fragment } from 'react';
import PlayerBox from './PlayerBox';

export default class OverviewPool extends Component {
  constructor(props) {
    super(props);
  }

  renderPlayers = () => {
    return <PlayerBox />;
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
        <section id='section-overview'>
          <div className='overview-header'>
            <h1>
              {this.props.urlParams.lobby} <span>//</span>{' '}
              {this.props.urlParams.player}
            </h1>
          </div>
          <div className='overview-players'>{this.renderPlayers()}</div>
        </section>
      </Fragment>
    );
  }
}
