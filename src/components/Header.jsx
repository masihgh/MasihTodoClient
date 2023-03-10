import { Container,Nav,Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className='mb-3'>
        <Container>
          <Navbar.Brand href="#home"> <i className="bi bi-ui-checks"></i> Masih Todo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/about' className="nav-link">About Masih</Link>
              <a className="nav-link" href="https://github.com/masihghaznavis/MasihTodoClient">Repo Client</a>
              <a className="nav-link" href="https://github.com/masihghaznavis/MasihTodoServer">Repo Server</a>              
            </Nav>
              <div className="d-flex">
              <img className='me-2' src="https://img.shields.io/github/forks/masihghaznavis/MasihTodoClient?label=Fork%20Client&style=social" alt="fork client" />
              <img src="https://img.shields.io/github/forks/masihghaznavis/MasihTodoServer?label=Fork%20Server&style=social" alt="fork server" />
          
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;