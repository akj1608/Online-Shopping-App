import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'

const header = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home &nbsp;</Nav.Link>
      <Nav.Link href="#features"> Go to Cart &nbsp;
      <i className="fa-solid fa-cart-shopping"></i>
      </Nav.Link>
      <Nav.Link href="#pricing">Sign in &nbsp;
      <i class="fa-solid fa-user"></i>
      
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    
    
    </>
  )
}

export default header