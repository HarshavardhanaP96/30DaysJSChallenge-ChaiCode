import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Hello World!");
});

io.on("connection", (socket) => {
  console.log("A user connected.");

  // Listen for chat message events from the client
  socket.on("chat message", (msg) => {
    // Broadcast the message to all connected clients
    socket.broadcast.emit("chat message", msg);
  });

  // Listen for typing events from clients
  socket.on("typing", (data) => {
    // Broadcast the typing data to all other connected clients
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected.");
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
