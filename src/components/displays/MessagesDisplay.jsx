import "./MessagesDisplay.scss";
// React
import { useEffect, useRef } from "react";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

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
          <div>{message.user}</div>
          <div>{message.text}</div>
          <div>{message.createdAt}</div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessagesDisplay;