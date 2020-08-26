import React, { Component } from 'react';
import DeckPool from '../pool/DeckPool';
import Pool from '../../assets/js/classes/Pool';

export default class OfflineWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: {},
    };
  }

  componentDidMount() {
    const pool = new Pool(this.props.data);
    console.log('pool', pool);

    this.setState({ pool: pool });
  }
  render() {
    return (
      <div>
        <section id='top'>
          <span>hi</span>
        </section>
        <DeckPool pool={this.state.pool} />
      </div>
    );
  }
}
