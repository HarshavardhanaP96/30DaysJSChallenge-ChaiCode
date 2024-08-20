const ws = new WebSocket("ws://localhost:8080");

const conversations = document.getElementById("conversationBar");
const messageinput = document.getElementById("message-input");
const sendButton = document.getElementById("send-btn");

sendButton.addEventListener("click", () => {
  const message = messageinput.value;

  if (message.trim() !== "") {
    ws.send(message);
    appendeMessage(message, "sent");
    messageinput.value = "";
  }
});

ws.onmessage = (event) => {
  appendeMessage(event.data, received);
};

messageinput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendButton.click();
  }
});

function appendeMessage(message, type) {
  const newMessage = document.createElement("div");
  newMessage.classList.add("msg");
  if (type == "sent") {
    newMessage.classList.add("sent");
  }
  newMessage.textContent = message;
  conversations.appendChild(newMessage);
  conversations.scrollTop = conversations.scrollHeight;
}
