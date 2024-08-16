import './App.scss'
// Components
import MessageForm from "./components/forms/MessageForm";
import MessagesDisplay from "./components/displays/MessagesDisplay";

function App() {
  return (
    <div>
      <MessagesDisplay/>
      <MessageForm/>
    </div>
  )
}

export default App;
