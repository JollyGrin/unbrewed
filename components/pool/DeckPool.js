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

  onInit = () => {
    const newPool = new Pool(this.props.pool);
    newPool.makeDeck();
    newPool.shuffleDeck();
    newPool.shuffleDeck();
    newPool.draw();
    newPool.draw();
    newPool.draw();
    newPool.draw();
    newPool.draw();
    newPool.draw();
    newPool.discardCard(1);
    this.setState({ pool: newPool });
  };
  componentDidMount() {
    this.onInit();
  }

  render() {
    return (
      <Fragment>
        <section id='cardPool'>
          {this.props.pool ? <DeckInfo pool={this.state.pool} /> : '...'}
          {this.props.pool ? <HandPool pool={this.state.pool} /> : '...'}
          {this.props.pool ? <DiscardPool pool={this.state.pool} /> : '...'}
          {this.props.pool ? <DeckSectionPool pool={this.state.pool} /> : '...'}
        </section>
      </Fragment>
    );
  }
}
