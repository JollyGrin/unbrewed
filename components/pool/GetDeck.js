import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class GetDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ``,
      baseUrl: `/online/${this.props.urlParams.lobby}/${this.props.urlParams.player}`,
    };
  }

  updateUrl = (e) => {
    const { value } = e.target;
    this.setState({ id: value });
  };

  render() {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    };

    return (
      <Fragment>
        <div className='loadDeck'>
          <h1>Load a Deck ID</h1>
          <p>
            Select or make a deck from{' '}
            <a href='https://unmatched.cards'>unmatched.cards</a>
          </p>
          <div className='loadDeck-form'>
            <form>
              <input
                className='input'
                placeholder='unmatched.cards deck ID'
                onChange={(e) => this.updateUrl(e)}
                onKeyPress={handleKeyPress}
              />

              <Link href={`${this.state.baseUrl}?deck=${this.state.id}`}>
                <a className='button'>
                  <i className='fas fa-play' />
                </a>
              </Link>
            </form>
          </div>
        </div>
        <style jsx>{`
          .loadDeck {
            padding-top: 5rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
