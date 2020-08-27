import React, { Component, Fragment } from 'react';

export default class PlayerBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className='overview-player-box'>
          <h1>{this.props.player}</h1>
          <div className='player-box-icon-wrapper'>
            <div>
              <i className='fas fa-hand-paper' />{' '}
              <span>{this.props.deck.hand.length}</span>
            </div>
            <div>
              <i className='fas fa-ban' />{' '}
              <span>{this.props.deck.discard.length}</span>
            </div>
            <div>
              <i className='fas fa-inbox' />{' '}
              <span>{this.props.deck.deck.length}</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
