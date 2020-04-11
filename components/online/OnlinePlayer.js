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
    this.connection = true
    this.props.wsClient.connect(lobby, player, this.props.processState)
  }

  mapRender = {
    playerNames: () => {
      const playerArray = Object.entries(this.props.state.gameState.players)

      return playerArray.map((player, index) => (
        <div key={index + Math.random()} className='player-item'>
          {/* {JSON.stringify(player[0])} */}
          {player[0] !== 'defaultname' ? player[0] : ''}
          <br />
          {player[0] !== 'defaultname' ? JSON.stringify(player[1]) : ''}
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
