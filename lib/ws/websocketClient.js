class WebsocketClient {
  socket = null
  gameState = {}
  playerState = {}
  message = {} //delete this
  subscriptions = {}
  nextSubscriptionId = 1

  connect (room, playerName, processState) {
    // if (this.socket) {
    //   console.log('Existing Connection: ', this.socket)
    //   return // already connected
    // }

    // console.log('Not Connected, Initiating...')

    const ngrok = `a7ed8baa.ngrok.io`
    const socket = new WebSocket(`ws://${ngrok}/ws/${room}?name=${playerName}`)

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          msgtype: 'playerstate',
          content: { test: 'abcXYZ' },
          error: null
        })
      )
    }

    socket.onmessage = event => {
      const data = JSON.parse(event.data)
      // console.log('sending data', data)
      this.processMessage(data, processState)
    }

    console.log('SOCKET STATE', socket)

    this.socket = socket
  }

  processMessage (data, processState) {
    this.gameState = data.content
    processState({
      playerState: this.playerState,
      gameState: this.gameState
    })
    console.log('connected with: ', this.gameState)
  }

  sendData (data, processState) {
    console.log('ws send data:', data)
    this.socket.send(JSON.stringify(data))
    // this.playerState = data
  }

  // subscribe (callback) {
  //   const subscriptionId = this.nextSubscriptionId++
  //   this.subscriptions[subscriptionId] = callback
  //   return subscriptionId
  // }

  // unsubscribe (subscriptionId) {
  //   delete this.subscriptions[subscriptionId]
  // }

  // broadcast (data) {
  //   for (const key in this.subscriptions) {
  //     const callback = this.subscriptions[key]
  //     callback(data)
  //   }
  // }
}

export default new WebsocketClient()
