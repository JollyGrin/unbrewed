import React, { Component, Fragment } from 'react';
import Pool from '../../assets/js/classes/Pool';
import DeckInfo from './deckInfo/DeckInfo';
import HandPool from './hand/HandPool';
import gameStateMock from '../../assets/mock/gamestate.json';
import DiscardPool from './discard/DiscardPool';
import DeckSectionPool from './deck/DeckSectionPool';

export default class DeckPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: {},
    };
    this.modal = false;
    this.heroView = true;
    this.handView = true;
    this.deckView = false;
  }

  conditionalRender = {
    handDisplay: () => {
      if (this.handView) {
        return <HandPool pool={this.state.pool} deckActions={this.deckActions} />
      }
    }
  }

  deckActions = {
    drawCard: () => {
      if (!this.state.pool.deck.length <= 0) {
        this.state.pool.draw();
        this.processState();
      } else {
        alert("Your deck is empty");
      }
    },
    discardCard: (cardIndex) => {
      this.state.pool.discardCard(cardIndex);
      this.processState();
    },
    drawDiscard: (cardIndex) => {
      this.state.pool.drawDiscard(cardIndex);
      this.processState();
    },
    drawDeck: (cardIndex) => {
      this.state.pool.drawDeck(cardIndex);
      this.processState();
    },
    deckCard: (cardIndex) => {
      this.state.pool.deckCard(cardIndex);
      this.processState();
    },
    deckCardBottom: (cardIndex) => {
      this.state.pool.deckCardBottom(cardIndex);
      this.processState();
    },
    shuffleTheDeck: () => {
      this.state.pool.shuffleDeck();
      this.processState();
    },
  };

  processState = () => {
    // this.props.wsClient.sendData(this.state.pool);
    this.setState({ pool: this.state.pool });
  };

  onInit = () => {
    const newPool = new Pool(this.props.pool);
    newPool.makeDeck();
    newPool.shuffleDeck();
    this.setState({ pool: newPool });
    // this.state.pool.shuffleDeck();
  };

  componentDidMount() {
    this.onInit();
  }

  render() {
    return (
      <Fragment>
        <section id='cardPool'>
          {this.props.pool ? <DeckInfo pool={this.state.pool} /> : '...'}
          {this.conditionalRender.handDisplay()}
          {this.props.pool ? <DiscardPool pool={this.state.pool} deckActions={this.deckActions} /> : '...'}
          {this.props.pool ? <DeckSectionPool pool={this.state.pool} deckActions={this.deckActions} /> : '...'}
        </section>
      </Fragment>
    );
  }
}
