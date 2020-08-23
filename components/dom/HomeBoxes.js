import React, { Component, Fragment } from 'react';

export default class HomeBoxes extends Component {
  render() {
    return (
      <Fragment>
        <div id='home-box-wrapper'>
          <div id='home-boxes'>
            <div className='home-box'>
              <h3>Offline</h3>
              <p>
                Load decks made on{' '}
                <a href='https://unmatched.cards'>unmatched.cards</a> and
                explore the synergies by drawing a hand, discarding, seeking
                cards from your deck, and more.
              </p>
            </div>
            <div className='home-box'>
              <h3>Online</h3>
              <p>
                Play your decks against friends online. Create/join the same
                lobby as a friend and see each other’s stats and actions in real
                time.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
