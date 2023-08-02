const WebSocket = require('ws')

const wss = new WebSocket.Server({port:8000})

wss.on('connection',function(ws) {
  console.log('a new client is connected')
  ws.on('message',function(msg) {
    // 广播给非自己的其他客户端
    wss.clients.forEach(function each(client) {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg)
      }
    })
  })
  // ws.send("Message from server")
})