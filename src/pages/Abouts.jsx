import { Button, Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Abouts() {
    const navigate = useNavigate()
    return (<>
        <Container>
            <Row>
                <Col sm={12}>
                <Card body className="p-5">
                    <span className="display-6">About Masih!</span>
                    <br />
                    <span className="h3">My name is Masih Ghaznavi, my birthday I s 2006/27/3, from Karaj/Iran. A Fullstack who works as a freelancer, also a curios tech-lover who always wants to try new devices, gadgets, etc. I love open-source community and therefore enjoy using GNU/Linux. I also do enjoy web development and look forward to the new web-related technologies, though it's not my main occupation.</span>
                    <br /><br />
                    <a href="https://instagram.com/u/ghaznavi_masih" className="">
                        <img src="https://img.shields.io/static/v1?label=instagram&style=for-the-badge&logo=instagram&message=ghaznavi_masih" alt="ghaznavi_masih" />
                    </a>
                    <br /><br />
                    <a href="https://t.me/MasihGhaznavi" className="">
                        <img src="https://img.shields.io/static/v1?label=telegram&style=for-the-badge&logo=telegram&message=MasihGhaznavi" alt="MasihGhaznavi" />
                    </a>
                    <br /><br />
                    <a href="https://github.com/masihghaznavis" className="">
                        <img src="https://img.shields.io/static/v1?label=github&style=for-the-badge&logo=github&message=MasihGhaznavis" alt="MasihGhaznavis" />
                    </a>
                </Card>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Abouts;