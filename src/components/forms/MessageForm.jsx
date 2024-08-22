import "./MessageForm.scss";
// React
import { useState } from "react";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MessageForm = ({ submitMessage }) => {
  // Controlled inputs
  const [message, setMessage] = useState("");

  return (
    <Form 
      id="messageForm"
      onSubmit={e => submitMessage(e, message)}>
      <Form.Group>
        <Form.Control 
          onChange={e => setMessage(e.target.value)}
          type="text"
          placeholder="Message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default MessageForm;