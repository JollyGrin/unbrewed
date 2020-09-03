import React, { Component, Fragment } from 'react';
import { useRouter } from 'next/router';

export default class GetDeck extends Component {
  constructor(props) {
    super(props);
    this.deckIdInput = React.createRef();
    this.url = `/online/${this.props.urlParams.lobby}/${this.props.urlParams.player}`;
  }

  //   getDeckId = () => {
  //     if (!this.deckIdInput.current) {
  //       return;
  //     }
  //     this.url = `/online/${this.props.urlParams.lobby}/${this.props.urlParams.player}?deck=${this.deckIdInput.current.value}`;
  //     console.log('url', this.url);
  //   };

  render() {
    // const router = useRouter();
    // const handleClick = (e) => {
    //   e.preventDefault();
    //   router.push('google.com');
    // };

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
                ref={this.deckIdInput}
                // defaultValue={'lDOM'}
                className='input'
                placeholder='unmatched.cards deck ID'
                onChange={() => this.getDeckId()}
              />
              {/* <a
                className='button'
                href={`${this.url}?deck=${this.deckIdInput.current.value}`}
              >
                <i className='fas fa-play' />
              </a> */}
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
