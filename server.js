const WebSocketServerPort = 8000;
const WebSocketServer = require("websocket").server;
const http = require("https");
const server = http.CreateServer();
server.listen(webSocketServerPort);
const wsServer = new wenSocketServer({
  httpServer: server
});
