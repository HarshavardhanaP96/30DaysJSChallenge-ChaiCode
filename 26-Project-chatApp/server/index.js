import WebSocket from "ws";
import net from "net";

const websocketserver = new WebSocket.Server({ port: 8080 });
const tcpclient = new net.Socket();

tcpclient.connect(3000, "127.0.0.1", () => {
  console.log("connected to tcp server");
});

websocketserver.on("connection", (ws) => {
  console.log("client connected via wss");

  ws.on("message", (message) => {
    console.log("Recienved from tcp client", message);

    tcpclient.write(message);
  });

  tcpclient.on("data", (data) => {
    ws.send(data.toString());
  });

  ws.on("close", () => {
    console.log("web socket disconnected");
  });
});

console.log("socket is running on 8080");
