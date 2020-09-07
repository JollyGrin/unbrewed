import React, { Component } from 'react';
import DeckPool from '../pool/DeckPool';
import OverviewPool from '../pool/OverviewPool';
import wsClient from '../../assets/js/ws/websocketClient';
import GetDeck from '../pool/GetDeck';

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

  wsClientSendData = (stateData) => {
    wsClient.sendData(stateData);
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        {this.props.data ? (
          <div>
            <OverviewPool
              state={this.state}
              processState={this.processState}
              wsClient={wsClient}
              urlParams={this.props.urlParams}
            />
            <DeckPool
              player={this.props.urlParams.player}
              state={this.state}
              processState={this.processState}
              pool={this.props.data}
              wsClientSendData={this.wsClientSendData}
            />
          </div>
        ) : (
          <GetDeck urlParams={this.props.urlParams} />
        )}
      </div>
    );
  }
}
