import React, { Component, Fragment } from 'react';
import CardTemplate from '../../card/CardTemplate';

export default class HandCardWrapper extends Component {
  constructor(props) {
    super(props);
  }

  isDeckOpen = (callback, v) => {
    !this.props.deckView
      ? callback(v)
      : alert('Close your deck before making further actions.');
  };

  render() {
    return (
      <Fragment>
        <div className='cardWrapper'>
          <div className='navWrapper navHand'>
            <a
              onClick={() =>
                this.isDeckOpen(
                  this.props.deckActions.commitActions.commit,
                  this.props.index
                )
              }
            >
              <i className='fas fa-angle-up' title='Play this card facedown' />
            </a>
            <a
              onClick={() =>
                this.isDeckOpen(
                  this.props.deckActions.deckCard,
                  this.props.index
                )
              }
            >
              <i
                className='fa fa-hourglass-start'
                title='Places card on the top of your deck'
              />
            </a>
            <a
              onClick={() =>
                this.isDeckOpen(
                  this.props.deckActions.deckCardBottom,
                  this.props.index
                )
              }
            >
              <i
                className='fa fa-hourglass-end'
                title='Places card on the bottom of your deck'
              />
            </a>
            <a
              onClick={() =>
                this.isDeckOpen(
                  this.props.deckActions.discardCard,
                  this.props.index
                )
              }
            >
              <i className='fas fa-angle-down' title='Discard this card' />
            </a>
          </div>
          <CardTemplate card={this.props.card} />
        </div>
      </Fragment>
    );
  }
}
