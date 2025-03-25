import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#e7f1ff', color: '#343a40' }} className="py-4">
            <Container role="footer">
                <Row>
                    <Col md={4}>
                        <h5>О нас</h5>
                        <p>SOCBOOK – профессиональная социальная сеть для реабилитологов и производителей ТСР.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Полезные ссылки</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ backgroundColor: '#e7f1ff', border: 'none' }}>
                                <Button as={Link} to="/about" variant="link" className="text-dark">О проекте</Button>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: '#e7f1ff', border: 'none' }}>
                                <Button as={Link} to="/contact" variant="link" className="text-dark">Контакты</Button>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: '#e7f1ff', border: 'none' }}>
                                <Button as={Link} to="/privacy" variant="link" className="text-dark">Политика конфиденциальности</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <h5>Социальные сети</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ backgroundColor: '#e7f1ff', border: 'none'}}>
                                <Button as="a" href="https://facebook.com" target="_blank" variant="link" className="text-dark">Facebook</Button>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: '#e7f1ff', border: 'none' }}>
                                <Button as="a" href="https://twitter.com" target="_blank" variant="link" className="text-dark">Twitter</Button>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: '#e7f1ff', border: 'none' }}>
                                <Button as="a" href="https://linkedin.com" target="_blank" variant="link" className="text-dark">LinkedIn</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} SOCBOOK. Все права защищены.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
