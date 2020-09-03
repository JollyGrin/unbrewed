import React, { Component, Fragment } from 'react';
import CardTemplate from '../../card/CardTemplate';

export default class DeckCardWrapper extends Component {
  constructor(props) {
    super(props);
  }

  drawDeck = () => {
    this.props.deckActions.drawDeck(this.props.index);
    this.props.domActions.viewDeck();
  };

  render() {
    return (
      <Fragment>
        <div className='cardWrapper'>
          <div className='navWrapper'>
            <a onClick={() => this.drawDeck()}>
              <i className='fas fa-angle-up' title='Play this card facedown' />
            </a>
          </div>
          <CardTemplate card={this.props.card} />
        </div>
      </Fragment>
    );
  }
}
