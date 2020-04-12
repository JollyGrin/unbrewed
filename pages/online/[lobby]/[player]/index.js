import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import OnlineHead from '../../../../components/online/OnlineHead'
import OnlinePlayer from '../../../../components/online/OnlinePlayer'
import OnlineLayout from '../../../../components/online/OnlineLayout'
import Overview from '../../../../components/online/PlayerPool/Overview'
import wsClient from '../../../../lib/ws/websocketClient'

class indexPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      socket: {},
      playerState: {},
      gameState: { gid: {}, players: {} }
    }
  }

  processState = ({
    socket = this.state.socket,
    playerState = this.state.playerState,
    gameState = this.state.gameState
  }) => {
    console.log('state update', socket, playerState, gameState)
    this.setState({ socket, playerState, gameState })
  }

  sendMessageTest = () => {
    return 'sendmessage'
  }

  componentDidMount () {}

  render () {
    const { lobby = '', player = '' } = this.props.router.query
    return (
      <>
        <OnlineHead lobby={lobby} player={player} />
        <div className='OnlineDock'>
          {!lobby ? (
            ''
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
        <br />
        <hr />
        <Overview
          state={this.state}
          lobby={lobby}
          player={player}
          wsClient={wsClient}
          processState={this.processState}
        />
      </>
    )
  }
}

export default withRouter(indexPlayer)
