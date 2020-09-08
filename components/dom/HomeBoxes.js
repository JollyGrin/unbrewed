import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class HomeBoxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: `xxxx`,
      player: `default`,
      lobby: `default`,
    };
  }

  updateState = (e, field) => {
    e.preventDefault();
    const { value } = e.target;
    switch (field) {
      case 'id':
        this.setState({ id: value });
        return;
      case 'player':
        this.setState({ player: value });
        return;
      case 'lobby':
        this.setState({ lobby: value });
        return;
      default:
        return;
    }
  };

  render() {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    };
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
                    placeholder='deck ID'
                    onChange={(e) => this.updateState(e, 'id')}
                    onKeyPress={handleKeyPress}
                  ></input>
                  <Link href={`/offline/${this.state.id}`}>
                    <a className='button'>
                      <i className='fas fa-play'></i>
                    </a>
                  </Link>
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
                  <input
                    className='online-input'
                    placeholder='Lobby'
                    onChange={(e) => this.updateState(e, 'lobby')}
                    onKeyPress={handleKeyPress}
                  />
                  <input
                    className='online-input'
                    placeholder='Player'
                    onChange={(e) => this.updateState(e, 'player')}
                    onKeyPress={handleKeyPress}
                  />
                  <Link
                    href={`/online/${this.state.lobby}/${this.state.player}`}
                  >
                    <a className='button'>
                      <i className='fas fa-play'></i>
                    </a>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
