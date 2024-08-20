import net from "net";

const clients = [];

const server = net.createServer((socket) => {
  console.log("A user connected");

  //adding clients clonnected
  clients.push(socket);

  //broadcast message to all connected clients
  const broadcast = (message, sender) => {
    for (const client of clients) {
      if (client !== sender) {
        client.write(message);
      }
    }
  };

  //handle incoming data
  socket.on("data", (data) => {
    const message = data.toString().trim();
    console.log("messagereceived successfullt");
    broadcast(message, socket);
  });

  socket.on("end", () => {
    console.log("user disconnected");
  });

  socket.on("error", (err) => {
    console.log("socket Error", err);
  });
});

server.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
