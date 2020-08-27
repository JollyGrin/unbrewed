import React, { Component, Fragment } from 'react';
import CardTemplate from '../../card/CardTemplate';

export default class HandCardWrapper extends Component {
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
            <a>
              <i
                className='fa fa-hourglass-start'
                title='Places card on the top of your deck'
              />
            </a>
            <a>
              <i
                className='fa fa-hourglass-end'
                title='Places card on the bottom of your deck'
              />
            </a>
            <a>
              <i className='fas fa-angle-down' title='Discard this card' />
            </a>
          </div>
          <CardTemplate card={this.props.card} />
        </div>
      </Fragment>
    );
  }
}
