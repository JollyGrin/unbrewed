import React, { Component, Fragment } from 'react';

export default class HomeBoxes extends Component {
  render() {
    return (
      <Fragment>
        <div id='home-box-wrapper'>
          <div id='home-boxes'>
            <div className='home-box'>
              <h3>Test Offline</h3>
              <p>
                Load decks made on{' '}
                <a href='https://unmatched.cards'>unmatched.cards</a> and
                explore the synergies by drawing a hand, discarding, seeking
                cards from your deck, and more.
              </p>
              <div className='offline-form'>
                <form>
                  <input
                    className='offline-input'
                    placeholder='unmatched.cards deck ID'
                  ></input>
                  <a className='button'>
                    <i className='fas fa-play'></i>
                  </a>
                </form>
              </div>
            </div>
            <div className='home-box'>
              <h3>Play Online</h3>
              <p>
                Play your decks against friends online. Create/join the same
                lobby as a friend and see each other’s stats and actions in real
                time.
              </p>
              <div className='online-form'>
                <form>
                  <input className='online-input' placeholder='Lobby' />
                  <input className='online-input' placeholder='Player' />
                  <a className='button'>
                    <i className='fas fa-play'></i>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
