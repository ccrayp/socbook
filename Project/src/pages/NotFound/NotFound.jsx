import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Container className="py-5" role="not_found">
            <Row className="justify-content-center text-center mb-5">
                <Col md={8}>
                    <h1 className="display-1 text-primary mb-4">404</h1>
                    <h2 className="display-4 mb-4">Страница не найдена</h2>
                    <p className="lead mb-4">
                        К сожалению, запрашиваемая вами страница не существует или была перемещена.
                        Возможно, вы ошиблись при вводе адреса или перешли по неработающей ссылке.
                    </p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Button as={Link} to="/" variant="primary" size="lg">На главную</Button>
                        <Button as={Link} to="/profile/posts" variant="outline-primary" size="lg">Войти в аккаунт</Button>
                    </div>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                            <h2 className="mb-4">Попробуйте следующие разделы SOCBOOK</h2>
                            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                                <Button as={Link} to="/specialists" variant="outline-info">Специалисты</Button>
                                <Button as={Link} to="/organizations" variant="outline-info">Организации</Button>
                                <Button as={Link} to="/manufacturers" variant="outline-info">Производители</Button>
                                <Button as={Link} to="/public_organizations" variant="outline-info">Общественные организации</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}