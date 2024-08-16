import "./MessagesDisplay.scss";
// Bootstrap
import ListGroup from 'react-bootstrap/ListGroup';

// Sample messages
const messages = [
  "ksdfsflmvsdkm",
  "divfnsavnlkvmnsk",
  "fklnvskdnvsndklvsnlkv",
  "lksmnalkdnks"
]

const MessagesDisplay = () => {
  return (
    <ListGroup>
      {messages.map((message, idx) => (
        <ListGroup.Item key={idx}>{message}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default MessagesDisplay;