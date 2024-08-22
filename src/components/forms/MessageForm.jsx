import "./MessageForm.scss";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MessageForm = ({ message, setMessage, submitMessage }) => {
  return (
    <Form 
      id="messageForm"
      onSubmit={submitMessage}>
      <Form.Group>
        <Form.Control 
          onChange={e => setMessage(e.target.value)}
          value={message}
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