import React, { Component, Fragment } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div id='nav'>
          <div className='nav-left'>
            <span>Make a Deck</span>
          </div>
          <div className='nav-right'>
            <span>Offline</span>
            <span>Online</span>
          </div>
        </div>
      </Fragment>
    );
  }
}
