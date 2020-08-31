import React, { Component } from 'react';
import DeckPool from '../pool/DeckPool';
import Pool from '../../assets/js/classes/Pool';

export default class OfflineWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
      playerState: {},
      gameState: {},
    };
  }

  processState = ({
    socket = this.state.socket,
    playerState = this.state.playerState,
    gameState = this.state.gameState,
  }) => {
    this.setState({ socket, playerState, gameState });
  };

  componentDidMount() {
    const pool = new Pool(this.props.data);
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
