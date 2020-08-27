import React, { Component, Fragment } from 'react';
import DeckInfo from './deckInfo/DeckInfo';
import HandPool from './hand/HandPool';

export default class DeckPool extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <section id='cardPool'>
          {this.props.pool ? <DeckInfo pool={this.props.pool} /> : 'loading...'}
          {this.props.pool ? <HandPool pool={this.props.pool} /> : 'loading...'}
        </section>
      </Fragment>
    );
  }
}
