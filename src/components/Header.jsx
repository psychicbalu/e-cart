import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
function Header() {
    
    const [cartItems, setCartItems] = useState(0);
    const handleClick = () => {
        setCartItems(cartItems + 1);
      };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand > <Nav.Link><Link onClick={handleClick}  to={'/'} style={{textDecoration: 'none' }}> <i class="fa-solid fa-truck fa-bounce"></i> E-Cart </Link>    </Nav.Link>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link > <Link to={'/cart'} style={{textDecoration: 'none' }}  >Cart <Badge bg="warning">{cartItems}</Badge> </Link> </Nav.Link>
            <Nav.Link > <Link to={'/wishlist'} style={{textDecoration: 'none' }}  > WishList <Badge bg="danger">9</Badge> </Link> </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header