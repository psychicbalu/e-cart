import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useFetch from '../Hooks/usefetch';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  const data = useFetch('https://dummyjson.com/products');
  console.log(data);

  return (
    <div>
      <Row className='m-1 '>
        {data ? (
          data.map((item) => (
            <Col key={item.id}>
              <Card  style={{ width: '18rem',height:"30rem"  }}>
                <Card.Img variant="top" style={{height:"50%"}} src={item.thumbnail} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                   {item.description.slice(1, -3) + '...'}
                  </Card.Text>
                  <Card.Text style={{color:'red'}}>
                   {item.price} $
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button  className='btn '><i className="fa-solid fa-heart" style={{ color: '#fcba03' }}></i> </Button>
                    <Button className='btn'><i className="fa-solid fa-cart-shopping" style={{ color: '#eb1405' }}></i> </Button>
                  </div>
                  
                </Card.Body>

              </Card>
            </Col>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Row>
    </div>
  );
}

export default Home;
