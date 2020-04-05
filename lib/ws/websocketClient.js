class WebsocketClient {
  socket = null
  subscriptions = {}
  nextSubscriptionId = 1

  connect (room, playerName) {
    console.log('ws', room, playerName)

    if (this.socket) {
      console.log('already connected', this.socket)
      return // already connected
    }

    console.log('not connected')

    const socket = new WebSocket(
      `ws://a7ed8baa.ngrok.io/ws/${room}?name=${playerName}`
    )
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          msgtype: 'playerstate',
          content: {},
          error: null
        })
      )
    }
    socket.onmessage = event => {
      //   console.log('event', event)
      const data = JSON.parse(event.data)
      console.log('SOCKET STATE', data.content)
      //   this.processMessage(data)
    }

    console.log('returned socket', this.socket)
    this.socket = socket
  }

  processMessage (data) {
    console.log('pm', data)
    console.debug('WebsocketClient message:', data)

    const { content } = data
    console.log('processMessage', content)

    // this.socket.send('testtesttest')
  }

  subscribe (callback) {
    const subscriptionId = this.nextSubscriptionId++
    this.subscriptions[subscriptionId] = callback
    return subscriptionId
  }

  unsubscribe (subscriptionId) {
    delete this.subscriptions[subscriptionId]
  }

  sendData (data) {
    console.log('senddata', data)
    this.socket.send(JSON.stringify(data))
  }

  broadcast (data) {
    for (const key in this.subscriptions) {
      const callback = this.subscriptions[key]
      callback(data)
    }
  }
}

export default new WebsocketClient()
