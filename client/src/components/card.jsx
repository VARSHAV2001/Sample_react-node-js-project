import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function HomeCard(props) {

  const detailData = {
    id: props.id,
    title: props.title,
    description: props.description,
    images: props.images
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${props.images}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Booking</Button>
        {props.page === 'homepage' && <Link to={`/homepage `} state={ detailData } className='float-end btn btn-outline-secondary' title="Enroll Now"><i className="fa-solid fa-bag-shopping"></i></Link>}
      </Card.Body>
    </Card>
  );
}

export default HomeCard;