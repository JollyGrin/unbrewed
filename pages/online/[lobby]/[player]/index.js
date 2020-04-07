import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import OnlinePlayer from '../../../../components/online/OnlinePlayer'
import OnlineLayout from '../../../../components/online/OnlineLayout'

class indexPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = { socket: {}, playerState: {}, gameState: {} }
  }

  processState = ({
    socket = this.state.socket,
    playerState = this.state.playerState,
    gameState = this.state.gameState
  }) => {
    // console.log('state update', socket, playerState, gameState)
    this.setState({ socket, playerState, gameState })
    console.log('process index - setting gamestate', playerState, gameState)
  }

  componentDidMount () {}

  render () {
    const { lobby = '', player = '' } = this.props.router.query
    console.log('ROUTER HOME', lobby, player)
    return (
      <div>
        {!lobby ? (
          ''
        ) : (
          <OnlineLayout lobby={lobby} player={player}>
            <OnlinePlayer
              lobby={lobby}
              player={player}
              processState={this.processState}
            />
          </OnlineLayout>
        )}
      </div>
    )
  }
}

export default withRouter(indexPlayer)
