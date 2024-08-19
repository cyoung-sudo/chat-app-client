import './App.scss'
// Socket
import io from "socket.io-client";
// Components
import MessageForm from "./components/forms/MessageForm";
import MessagesDisplay from "./components/displays/MessagesDisplay";

// Initialize socket
const socket = io("http://localhost:5050");

let submitMessage = (e, message) => {
  e.preventDefault();
  socket.emit("message", message);
}

function App() {
  return (
    <div>
      <MessagesDisplay/>
      <MessageForm submitMessage={submitMessage}/>
    </div>
  )
}

export default App;
