import './App.scss'
// React
import { useState, useEffect } from "react";
// Socket
import io from "socket.io-client";
// Components
import MessageForm from "./components/forms/MessageForm";
import MessagesDisplay from "./components/displays/MessagesDisplay";

// Initialize socket
const socket = io("http://localhost:5050");

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for message updates
    socket.on("update", data => {
      setMessages(data);
    });
  }, [])

  // Send new message
  let submitMessage = (e, message) => {
    e.preventDefault();
    socket.emit("message", message);
  }

  return (
    <div>
      <div id="messageDisplay-wrapper">
        <MessagesDisplay messages={messages}/>
      </div>

      <div id="messafeForm-wrapper">
        <MessageForm submitMessage={submitMessage}/>
      </div>
    </div>
  );
}

export default App;