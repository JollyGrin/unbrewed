import React, { Component, Fragment } from 'react';
import CardTemplate from '../../card/CardTemplate';
import dynamic from 'next/dynamic';
const DeckCardWrapper = dynamic(import('./DeckCardWrapper'), { ssr: false });

export default class DeckSectionPool extends Component {
  constructor(props) {
    super(props);
  }

  renderDeck = () => {
    if (this.props.pool && this.props.pool.deck) {
      return this.props.pool.deck.map((card, index) => (
        <div key={index}>
          <DeckCardWrapper
            deckActions={this.props.deckActions}
            card={card}
            index={index}
            domActions={this.props.domActions}
          />
        </div>
      ));
    }
  };

  render() {
    return (
      <Fragment>
        <section className='carousel-section'>
          <div className='carousel-header'>
            <h1>
              Deck ({this.props.pool.deck ? this.props.pool.deck.length : '...'}
              )
            </h1>
            <a onClick={() => this.props.domActions.viewDeck()}>
              {this.props.deckView ? 'Close & Shuffle Deck' : 'View Deck'}
            </a>
          </div>
          {this.props.deckView ? (
            <div className='carousel-grid-wrapper'>{this.renderDeck()}</div>
          ) : (
            '...hidden'
          )}
        </section>
      </Fragment>
    );
  }
}
