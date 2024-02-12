import React from 'react'
import { Col, Row } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
       <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.s2PlroYvMDnibPbak78SQgHaEc?w=311&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <div className='d-flex  justify-content-between'>
       <Button className='btn ' ><i class="fa-solid fa-heart" style={{color: '#d22014'}}></i> </Button>
        <Button className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: '#eb1405'}}></i> </Button>

       </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home