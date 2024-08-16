import "./MessageForm.scss";
// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MessageForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default MessageForm;