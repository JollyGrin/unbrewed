import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import OnlinePlayer from '../../../../components/online/OnlinePlayer'
import OnlineLayout from '../../../../components/online/OnlineLayout'
import Overview from '../../../../components/online/PlayerPool/Overview'

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
    console.log('state update', socket, playerState, gameState)
    this.setState({ socket, playerState, gameState })
  }

  componentDidMount () {}

  render () {
    const { lobby = '', player = '' } = this.props.router.query
    return (
      <>
        <div className='OnlineDock'>
          {!lobby ? (
            ''
          ) : (
            <OnlineLayout lobby={lobby} player={player}>
              <OnlinePlayer
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
        <Overview />
      </>
    )
  }
}

export default withRouter(indexPlayer)
