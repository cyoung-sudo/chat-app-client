import './App.scss'
// React
import { useState, useEffect } from "react";
// Socket
import io from "socket.io-client";
// Components
import NavigationBar from "./components/navigation/NavigationBar";
import MessageForm from "./components/forms/MessageForm";
import MessagesDisplay from "./components/displays/MessagesDisplay";

// Initialize socket
const socket = io("http://localhost:5050");

function App() {
  // Controlled inputs
  const [message, setMessage] = useState("");
  // Retrieved data
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for message updates
    socket.on("update", data => {
      setMessages(data);
    });
  }, [])

  // Send new message
  let submitMessage = e => {
    e.preventDefault();
    socket.emit("message", message);
    // Reset message
    setMessage("");
  }

  return (
    <div id="app">
      <NavigationBar/>

      <div id="app-content">
        <div id="messageDisplay-wrapper">
          <MessagesDisplay messages={messages}/>
        </div>

        <div id="messafeForm-wrapper">
          <MessageForm
            message={message}
            setMessage={setMessage}
            submitMessage={submitMessage}/>
        </div>
      </div>
    </div>
  );
}

export default App;