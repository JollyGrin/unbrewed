import React, { Component, Fragment } from 'react'
import wsClient from '../../lib/ws/websocketClient'

export default class OnlinePlayer extends Component {
  constructor (props) {
    super(props)
    this.state = { player: [] }
    this.connection = false
  }

  connectWS = () => {
    const { lobby, player } = this.props
    wsClient.connect(lobby, player)
    this.connection = true

    console.log('connected:', wsClient.gameState)

    this.props.processState({
      playerState: wsClient.playerState,
      gameState: wsClient.gameState
    })
  }

  sendMessage = () => {
    console.log('message sent!')
    wsClient.sendData({
      msgtype: 'playerstate',
      content: { test: 'abc' },
      error: null
    })
    console.log('sm:', wsClient)
  }

  mapRender = {
    playerNames: () => {
      let playerArray = []
      for (let player in this.props.state.gameState) {
        if (player !== 'defaultname') {
          playerArray.push(player)
        }
      }
      console.log('playerArray', playerArray)
      return playerArray.map((player, index) => (
        <div key={index + Math.random()} className='player-item'>
          {player}
        </div>
      ))
    },
    gameState: () => {
      this.props.state.gameState
      let gameStateArray = []
      for (let player in this.props.state.gameState) {
        if (player !== 'defaultname') {
          gameStateArray.push(this.props.state.gameState[player])
        }
      }
      console.log('gameStateArray', gameStateArray)
      return gameStateArray.map((player, index) => (
        <div key={index + Math.random()} className='player-item'>
          {JSON.stringify(this.props.state.gameState[player])}
        </div>
      ))
    }
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
          <div className='container'>{this.mapRender.playerNames()}</div>
          {this.mapRender.gameState()}
        </div>

        <style global jsx>{`
          .container {
            display: flex;
          }

          .container .player-item {
            margin: 1rem;
            font-family: BebasNeueRegular;
            font-size: 1.2rem;
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
