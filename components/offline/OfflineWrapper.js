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

  wsClientSendData = (stateData) => {
    return;
  };

  componentDidMount() {
    const pool = new Pool(this.props.data);
    this.setState({ pool: pool });
  }
  render() {
    return (
      <div>
        <section id='top'>
          <span>Test your Deck</span>
        </section>
        <DeckPool
          player={'Test'}
          state={this.state}
          processState={this.processState}
          pool={this.props.data}
          wsClientSendData={this.wsClientSendData}
        />
      </div>
    );
  }
}
