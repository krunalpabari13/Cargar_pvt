import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MediaCard(props) {
  return (
    <Card className=' bg-dark mx-3 mt-4 col-lg-2 col-sm-2  text-white card-size 'style={{borderRadius:'10px'}} >
     <img src={props.src} className='' style={{height:'5.5em',width:'5.5rem',margin:'auto'}}/>
      <Card.Body>
        <Card.Title className=''>{props.title}</Card.Title>
        <Card.Text className='font-size'>
          {props.body}
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

