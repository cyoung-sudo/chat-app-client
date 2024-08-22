import "./MessagesDisplay.scss";
// React
import { useEffect, useRef } from "react";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
// Icons
import { CiUser } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const MessagesDisplay = ({ messages }) => {
  const listRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom on new messages
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <ListGroup id="messageDisplay" ref={listRef}>
      {messages.map((message, idx) => (
        <ListGroup.Item key={idx}>
          <div className="messageDisplay-big">{message.text}</div>
          <div className="messageDisplay-small"><span><CiUser/></span>{message.user}</div>
          <div className="messageDisplay-small"><span><CiClock2/></span>{new Date(message.createdAt).toLocaleString()}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessagesDisplay;