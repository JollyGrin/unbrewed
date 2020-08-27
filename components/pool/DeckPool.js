import React, { Component, Fragment } from 'react';
import Pool from '../../assets/js/classes/Pool';
import DeckInfo from './deckInfo/DeckInfo';
import HandPool from './hand/HandPool';
import gameStateMock from '../../assets/mock/gamestate.json';

export default class DeckPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: {},
    };
  }

  componentDidMount() {
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
  }

  render() {
    return (
      <Fragment>
        <section id='cardPool'>
          {this.props.pool ? <DeckInfo pool={this.state.pool} /> : 'loading...'}
          {this.props.pool ? <HandPool pool={this.state.pool} /> : 'loading...'}
        </section>
      </Fragment>
    );
  }
}
