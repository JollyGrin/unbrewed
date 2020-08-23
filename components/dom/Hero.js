import React, { Component, Fragment } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div id='hero'>
          <img src='/media/unbrewedxyz.svg' />
          <span>
            an <strong>unofficial</strong> deck simulator
            <br />
            for Unmatched: Battle of Legends
          </span>
        </div>
      </Fragment>
    );
  }
}
