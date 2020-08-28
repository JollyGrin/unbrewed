import React, { Component, Fragment } from 'react';
import CardTemplate from '../../card/CardTemplate';

export default class DeckCardWrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className='cardWrapper'>
          <div className='navWrapper'>
            <a>
              <i className='fas fa-angle-up' title='Play this card facedown' />
            </a>
          </div>
          <CardTemplate card={this.props.card} />
        </div>
      </Fragment>
    );
  }
}
