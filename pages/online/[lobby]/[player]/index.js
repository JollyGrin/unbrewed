import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import OnlineHead from "../../../../components/online/OnlineHead";
import OnlinePlayer from "../../../../components/online/OnlinePlayer";
import OnlineLayout from "../../../../components/online/OnlineLayout";
import Overview from "../../../../components/online/PlayerPool/Overview";
import wsClient from "../../../../lib/ws/websocketClient";

class indexPlayer extends Component {
  constructor(props) {
    super(props);
    this.connection = false;
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
    return "sendmessage";
  };

  render() {
    const { lobby = "", player = "" } = this.props.router.query;
    return (
      <>
        <section className="section header-box">
          <OnlineHead lobby={lobby} player={player} />
          <div className="OnlineDock">
            {!lobby ? (
              ""
            ) : (
              <OnlineLayout lobby={lobby} player={player}>
                <OnlinePlayer
                  wsClient={wsClient}
                  lobby={lobby}
                  player={player}
                  processState={this.processState}
                  state={this.state}
                />
              </OnlineLayout>
            )}
          </div>
        </section>
        <br />
        <div id="overview-div">
          <Overview
            state={this.state}
            lobby={lobby}
            player={player}
            wsClient={wsClient}
            processState={this.processState}
          />
        </div>
        <style jsx>{`
          section {
            display: block;
          }
          .header-box {
            background-color: #48284f;
            color: #e7cc98;
            padding-bottom: 2em;
          }
        `}</style>
      </>
    );
  }
}

export default withRouter(indexPlayer);
