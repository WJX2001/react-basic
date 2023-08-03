const WebSocket = require('ws')

const wss = new WebSocket.Server({port:8000})

wss.on('connection',function(ws) {
  console.log('a new client is connected')
  ws.on('message',function(msg) {
    // 检查消息是否是一个退出消息
    if (msg.includes('退出了聊天室')) {
      console.log(msg); // 打印退出消息
    }
    
    // 广播给非自己的其他客户端
    wss.clients.forEach(function each(client) {
      if(client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg)
      }
    })
  })
  // ws.send("Message from server")
})