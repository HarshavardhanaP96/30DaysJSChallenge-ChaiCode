const socket = io();

const messages = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const typingIndicator = document.getElementById("typing-indicator");

let typingTimeout; // Variable to store the typing timeout

sendButton.addEventListener("click", () => {
  const message = messageInput.value;

  if (message.trim() !== "") {
    socket.emit("chat message", message);

    appendMessage(message, "sent"); // Append the message as sent

    messageInput.value = ""; // Clear the input box

    clearTypingIndicator(); // Clear the typing indicator when a message is sent
    socket.emit("typing", { text: "" }); // Notify others that typing has stopped
  }
});

socket.on("chat message", (msg) => {
  appendMessage(msg, "received"); // Append the message as received
});

// Emit 'typing' event with the current text when user types
messageInput.addEventListener("input", () => {
  const text = messageInput.value;
  socket.emit("typing", { text });

  // Clear previous timeout if it exists
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }

  // Set a new timeout to clear the typing indicator after 1 second of inactivity
  typingTimeout = setTimeout(() => {
    clearTypingIndicator();
    socket.emit("typing", { text: "" }); // Notify others that typing has stopped
  }, 1000);
});

// Listen for 'typing' events from other clients
socket.on("typing", (data) => {
  typingIndicator.innerText = `Another user is typing: ${data.text}`;
});

// Function to clear the typing indicator
function clearTypingIndicator() {
  typingIndicator.innerText = "";
}

// Function to append messages to the chat
function appendMessage(message, type) {
  const messageElement = document.createElement("div");

  messageElement.classList.add("message");

  if (type === "sent") {
    messageElement.classList.add("sent");
  } else if (type === "received") {
    messageElement.classList.add("received");
  }

  messageElement.textContent = message;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
}
