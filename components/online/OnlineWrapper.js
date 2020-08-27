import React, { Component } from 'react';
import DeckPool from '../pool/DeckPool';
import OverviewPool from '../pool/OverviewPool';

export default class OnlineWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: {},
      playerState: {},
      gameState: { gid: {}, players: {} },
    };
  }

  processState = ({
    socket = this.state.socket,
    playerState = this.state.playerState,
    gameState = this.state.gameState,
  }) => {
    this.setState({ socket, playerState, gameState });
  };

  sendMessageTest = () => {
    return 'sendmessage';
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <OverviewPool state={this.state} urlParams={this.props.urlParams} />
        <DeckPool state={this.state} pool={this.state.pool} />
      </div>
    );
  }
}
