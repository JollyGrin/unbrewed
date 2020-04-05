import React, { Component, Fragment } from 'react'
import wsClient from '../../lib/ws/websocketClient'

export default class OnlinePlayer extends Component {
  constructor (props) {
    super(props)
    this.state = { socket: {} }
  }

  connectWS = () => {
    const { lobby, player } = this.props
    console.log('Player LOG:', lobby, player)

    wsClient.connect(lobby, player)

    this.setState({ socket: wsClient.socket })

    wsClient.subscribe(data => {
      console.log('subscribe', data)
    })
  }

  sendMessage = () => {
    console.log('check state send message', this.state)

    wsClient.sendData({
      msgtype: 'playerstate',
      content: { test: 'testabc' },
      error: null
    })
  }

  render () {
    return (
      <Fragment>
        <p>
          {' '}
          {this.props.lobby} - {this.props.player}
        </p>
        <a
          onClick={() => {
            this.connectWS()
          }}
        >
          CONNECT
        </a>
        <br />
        <br />
        <a onClick={() => this.sendMessage()}>SEND</a>
      </Fragment>
    )
  }
}
