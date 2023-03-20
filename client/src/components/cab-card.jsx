import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CabCard (props) {

  const detailData = {
    id: props.id,
    title: props.title,
    description: props.description,
    images: props.images
  }

    return(
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`${props.images}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.description}
        </Card.Text>
        {props.page === 'cabdetails' && <Link to={`/cabdetails `} state={ detailData } className='float-end btn btn-outline-secondary' title="Enroll Now"><i className="fa-solid fa-bag-shopping"></i></Link>}
      </Card.Body>
    </Card>
        </div>
    )
}

export default CabCard;
