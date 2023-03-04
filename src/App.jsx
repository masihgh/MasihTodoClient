import { useState } from 'react'
import { Button,Container,Stack,Nav,Navbar,NavDropdown,Card } from 'react-bootstrap';

import './App.scss'

function App() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Masih Todo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
			<div className="d-flex">

            <Button size="md" variant="primary">Add Note</Button>
            <Button size="md" variant="danger">Remove Note</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

	<Stack direction="horizontal" gap={2}>
	  <Button size="sm" as="a" variant="primary">
		Button as link
	  </Button>
	  <Button size="sm" as="a" variant="success">
		Button as link
	  </Button>
	</Stack>
	
	<Card body>&copy; All rights recived.</Card>
	</>
  )
}

export default App
