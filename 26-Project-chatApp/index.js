document.addEventListener("DOMContentLoaded", () => {
  const conversations = document.getElementById("conversationBar");
  const messageinput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-btn");

  sendButton.addEventListener("click", () => {
    const message = messageinput.value;

    if (message.trim() !== "") {
      const newmessage = document.createElement("div");
      newmessage.className = "msg-sent";

      newmessage.innerText = message;

      conversations.appendChild(newmessage);
      conversations.scrollTop = conversations.scrollHeight;

      message.innerText = "";
    }
  });
  messageinput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendButton.click();
    }
  });
});
