class WebsocketClient {
  socket = null;
  gameState = {};
  playerState = {};
  message = {}; //delete this
  subscriptions = {};
  nextSubscriptionId = 1;
  pingInterval = null;

  connect(room, playerName, processState) {
    const ngrok = `api.unbrewed.xyz`;
    const socket = new WebSocket(
      `wss://${ngrok}/ws/${room}?name=${playerName}`
    );

    let ws = this;
    socket.onopen = () => {
      // Socket is open
      console.log('Socket opened');
      // pingInterval is a heartbeat to the server to maintain an open websocket connection
      ws.pingInterval = setInterval(function() {
        ws.ping(); // Send a ping every interval
      }, 45000); //45s heartbeats
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // console.log('sending data', data)
      this.processMessage(data, processState);
    };

    // If the socker closes from an error, stop the hearbeats, log the error.
    socket.onerror = (event) => {
      // TODO: Should probably notify user or add a reconnect
      console.log('socket had an error: ', event);
      clearInterval(ws.pingInterval);
    };

    // If the socket is closed, it is likely the server closing the connection.
    // We got garbage collected or the server closed most likely.
    socket.onclose = (event) => {
      console.log('socket closed: ', event);
      clearInterval(ws.pingInterval);
    };

    this.socket = socket;
  }

  processMessage(data, processState) {
    if (data.msgtype != undefined && data.msgtype == 'pong') {
      return; // Don't react to pongs
    }
    // TODO: Dean you should really check the "msgtype".
    //    The server won't send a ping, but you should only react
    //    to 'gamestate' or 'playerstate' messages so I don't
    //    accidentally break something later.
    this.gameState = data.content;
    processState({
      playerState: this.playerState,
      gameState: this.gameState,
    });
  }

  sendData(data) {
    const messageContent = {
      msgtype: 'playerstate',
      content: data,
      error: null,
    };

    this.socket.send(JSON.stringify(messageContent));
  }

  // ping sends a ping message to the server
  ping() {
    const messageContent = {
      msgtype: 'ping',
      content: null,
      error: null,
    };

    if (this.socket != undefined) {
      this.socket.send(JSON.stringify(messageContent));
    } else {
      // This should not happen. It means the connection was terminated,
      // and we still tried to send a heartbeat.
      console.log('failed to ping');
    }
  }
}

export default new WebsocketClient();
