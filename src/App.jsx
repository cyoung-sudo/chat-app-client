import './App.scss'
// React
import { useState, useEffect } from "react";
// Socket
import io from "socket.io-client";
// Components
import NavigationBar from "./components/navigation/NavigationBar";
import MessageForm from "./components/forms/MessageForm";
import MessagesDisplay from "./components/displays/MessagesDisplay";

// Initialize socket connection
const socket = io("https://chat-app-server-ob9b.onrender.com");

function App() {
  // Controlled inputs
  const [message, setMessage] = useState("");
  // Retrieved data
  const [messages, setMessages] = useState([]);
  // Loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for message updates
    socket.on("update", data => {
      setLoading(false);
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
        {!loading &&
          <div id="messageDisplay-wrapper">
            <MessagesDisplay messages={messages}/>
          </div>
        }

        {!loading &&
          <div id="messafeForm-wrapper">
            <MessageForm
              message={message}
              setMessage={setMessage}
              submitMessage={submitMessage}/>
          </div>
        }

        {loading && 
          <div id="app-content-loading">
            <h1>Loading...</h1>
            <p>Waking up server</p>
            <p>Could take a minute :)</p>
          </div>
        }
      </div>
    </div>
  );
}

export default App;