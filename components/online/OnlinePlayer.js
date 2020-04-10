import React, { Component, Fragment } from 'react'
import wsClient from '../../lib/ws/websocketClient'

export default class OnlinePlayer extends Component {
  constructor (props) {
    super(props)
    this.state = { player: [] }
    this.connection = false
    this.textarea = React.createRef()
  }

  connectWS = () => {
    const { lobby, player } = this.props
    this.connection = true
    wsClient.connect(lobby, player, this.props.processState)

    console.log('connected:', wsClient)
  }

  sendMessage = () => {
    console.log('message sent!')
    wsClient.sendData(
      {
        msgtype: 'playerstate',
        content: { test: this.textarea.current.value },
        error: null
      },
      this.props.processState
    )
    console.log('sm:', wsClient)
  }

  mapRender = {
    playerNames: () => {
      const playerArray = Object.entries(this.props.state.gameState)

      console.log('playerArray', playerArray)
      return playerArray.map((player, index) => (
        <div key={index + Math.random()} className='player-item'>
          {JSON.stringify(player)}
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
        <br />
        <div className='input-box'>
          <textarea ref={this.textarea}></textarea>
          <a onClick={() => this.sendMessage()} className='button'>
            Submit
          </a>
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
