import { Button,Stack,Container,Row,Col,Card,Form,Alert } from 'react-bootstrap';
import Header from './components/Header';
import './assets/sass/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer';
import { TwitterPicker } from 'react-color';

function App() {
  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col sm={12} md={4}>
          <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> <i className='bi bi-sticky'></i> Title</Form.Label>
              <Form.Control type="email" placeholder="My Todooo Name..." />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label><i className='bi bi-body-text'></i> Task</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label> <i className="bi bi-palette"></i> Todo Color</Form.Label>
              <TwitterPicker className='w-100'/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
            <i className="bi bi-bookmark-plus-fill"></i> Submit
            </Button>
          </Form>

          </Card>
        </Col>
        <Col sm={12} md={8}>
          <Card body>
            <Alert variant='info'>
              Your Todo List Is Clean!
            </Alert>
            <hr />
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, omnis sint aperiam consequuntur recusandae, doloremque minus eveniet quidem quisquam dolore quo molestiae? Ullam rerum eos reiciendis nobis impedit, velit dolore?
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link className="btn btn-sm btn-warning" href="#"> <i className="bi bi-trash3"></i> </Card.Link>
                <Card.Link className="btn btn-sm btn-danger" href="#"> <i className="bi bi-star-fill"></i> </Card.Link>
              </Card.Body>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
	
	</>
  )
}

export default App
