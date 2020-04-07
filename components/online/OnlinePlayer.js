import React, { Component, Fragment } from 'react'
import wsClient from '../../lib/ws/websocketClient'

export default class OnlinePlayer extends Component {
  constructor (props) {
    super(props)
    this.state = { websocket: {}, socket: {}, playerState: {}, gameState: {} }
    this.connection = false
  }

  connectWS = () => {
    const { lobby, player } = this.props
    console.log('router info', lobby, player)
    wsClient.connect(lobby, player)
    const parsedWS = JSON.parse(JSON.stringify(wsClient))
    this.connection = true
    this.setState({ websocket: parsedWS })
  }

  sendMessage = () => {
    wsClient.sendData({
      msgtype: 'playerstate',
      content: { test: 'abc' },
      error: null
    })
  }

  processState = ({
    socket = this.state.socket,
    playerState = this.state.playerState,
    gameState = this.state.gameState
  }) => {
    console.log('state update', socket, playerState, gameState)
    this.setState({ socket, playerState, gameState })
  }

  render () {
    const styles = {
      connectionDisplay: {
        display: `${this.connection ? 'none' : ''}`
      },
      fieldDisplay: {
        display: `${!this.connection ? 'none' : ''}`
      }
    }
    return (
      <Fragment>
        <div className='connectionBox' style={styles.connectionDisplay}>
          <a onClick={() => this.connectWS()} className='button'>
            Connect to Lobby
          </a>
        </div>
        <div className='playerNames' style={styles.fieldDisplay}>
          <div className='container'>
            <div className='item'>{this.props.lobby}</div>
            <div className='item'>{this.props.player}</div>

            {console.log('state in dom', this.state.websocket)}
          </div>
        </div>

        <style jsx>{`
          .container {
            display: flex;
          }

          .item {
            align-self: auto;
            margin: auto;
          }

          .button {
            font-family: BebasNeueRegular;
            color: #fff !important;
            text-transform: uppercase;
            text-decoration: none;
            background: #1e90ff;
            padding: 0.7rem;
            border-radius: 3rem;
            display: inline-block;
            border: none;
            transition: all 0.4s ease 0s;
          }

          .button :hover {
            background: #434343;
            letter-spacing: 1px;
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
            box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
            transition: all 0.4s ease 0s;
          }
        `}</style>
      </Fragment>
    )
  }
}
