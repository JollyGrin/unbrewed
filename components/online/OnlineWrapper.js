import React, { Component } from 'react';
import DeckPool from '../pool/DeckPool';
import OverviewPool from '../pool/OverviewPool';
import gameStateMock from '../../assets/mock/gamestate.json';
import ucardMock from '../../assets/mock/ucards.json';
import wsClient from '../../assets/js/ws/websocketClient';
import GetDeck from '../pool/GetDeck';

export default class OnlineWrapper extends Component {
  constructor(props) {
    super(props);
    // this.state = gameStateMock;
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
        <OverviewPool
          state={this.state}
          processState={this.processState}
          wsClient={'mock'}
          urlParams={this.props.urlParams}
        />
        {console.log('90909', this.props.data)}
        {this.props.data ? (
          <DeckPool
            player={this.props.urlParams.player}
            state={this.state}
            pool={ucardMock}
            processState={this.processState}
          />
        ) : (
          <GetDeck urlParams={this.props.urlParams} />
        )}
      </div>
    );
  }
}
