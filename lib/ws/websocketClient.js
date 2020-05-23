class WebsocketClient {
  socket = null
  gameState = {}
  playerState = {}
  message = {} //delete this
  subscriptions = {}
  nextSubscriptionId = 1

  connect(room, playerName, processState) {
    const ngrok = `api.unbrewed.xyz`
    const socket = new WebSocket(`wss://${ngrok}/ws/${room}?name=${playerName}`)

    socket.onopen = () => {
      // socket.send(
      //   JSON.stringify({
      //     msgtype: 'playerstate',
      //     content: { test: 'abcXYZ' },
      //     error: null
      //   })
      // )
    }

    socket.onmessage = event => {
      const data = JSON.parse(event.data)
      // console.log('sending data', data)
      this.processMessage(data, processState)
    }

    this.socket = socket
  }

  processMessage(data, processState) {
    this.gameState = data.content
    processState({
      playerState: this.playerState,
      gameState: this.gameState
    })
  }

  sendData(data) {
    const messageContent = {
      msgtype: 'playerstate',
      content: data,
      error: null
    }

    this.socket.send(JSON.stringify(messageContent))
  }
}

export default new WebsocketClient()
