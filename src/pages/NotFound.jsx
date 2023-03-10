import { Button, Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate()
    return (<>
        <Container>
            <Row>
                <Col sm={12}>
                <Card body className="p-5">
                    <span className="display-6">404 - We Lost This Page🐴!</span>
                    <br />
                    <span className="h3">we search high and low but couldn't find what you're looking for. Let's find a better place for you to go.</span>
                    <br /><br />
                    <Button onClick={()=>navigate('/')}>Go Home Page -></Button>
                </Card>
                </Col>
            </Row>
        </Container>
    </>);
}

export default NotFound;