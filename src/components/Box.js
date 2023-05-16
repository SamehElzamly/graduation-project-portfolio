import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
export function Box(props) {
    return (
    <CardGroup className='w-18'>
        <Card>
        <Card.Img variant="top" src={props.toolImage} />
        <Card.Footer>
            <Link to={`/documentation/${props.toolName}`} className="text-muted">{props.toolName}</Link>
        </Card.Footer>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>
            {props.toolDescription}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}