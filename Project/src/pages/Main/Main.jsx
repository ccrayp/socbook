import { Container, Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <Container className="pt-4" role='main'>
            <Row className="mb-5 align-items-center">
                <Col md={6}>
                    <h1 className="display-4 mb-4">SOCBOOK – профессиональная социальная сеть для реабилитологов и производителей ТСР</h1>
                    <p className="lead">
                        Платформа для врачей-реабилитологов, производителей технических средств реабилитации (ТСР),
                        медицинских организаций и общественных объединений.
                    </p>
                    <div className="d-flex gap-3 mt-4">
                        <Button as={Link} to="/register" variant="primary" size="lg">Зарегистрироваться</Button>
                        <Button as={Link} to="/login" variant="outline-primary" size="lg">Войти</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <Image src="https://care-place.ru/image/catalog/article/5818.jpg" fluid rounded className="shadow" alt="Врачи-реабилитологи" />
                </Col>
            </Row>

            <Row className="mb-5">
                <Col>
                    <Card className="border-0 shadow-sm">
                        <Card.Body className="p-4">
                            <h2 className="mb-4 text-center">Ключевые возможности SOCBOOK</h2>

                            <ListGroup variant="flush" className="mb-4">
                                <ListGroup.Item className="border-0">
                                    <h5>✅ Профилирование по категориям:</h5>
                                    <div className="d-flex flex-wrap gap-3 mt-3">
                                        <Button as={Link} to="/specialists" variant="outline-info">Специалисты</Button>
                                        <Button as={Link} to="/organizations" variant="outline-info">Организации</Button>
                                        <Button as={Link} to="/manufacturers" variant="outline-info">Производители</Button>
                                        <Button as={Link} to="/public_organizations" variant="outline-info">Общественные организации</Button>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <h5>✅ Достоверная информация</h5>
                                    <p>Только проверенные данные о ТСР, исследования, отзывы специалистов</p>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <h5>✅ Публикации и медиа</h5>
                                    <p>Делитесь статьями, фото и видеообзорами оборудования</p>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0">
                                    <h5>✅ Безопасный мессенджер</h5>
                                    <p>Удобное общение между участниками сообщества</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={6} className="mb-4 mb-md-0">
                    <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src="doctors.avif" />
                        <Card.Body>
                            <Card.Text className="text-center">
                                Профессиональное сообщество SOCBOOK – обмен опытом и передовые технологии в реабилитации
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src="https://med-ob.ru/image/cache/catalog/easyphoto/8597/sistema-neyromyshechnoy-reabilitatsii-lpg-huber-360-md-10-1200x1200.jpg" />
                        <Card.Body>
                            <Card.Text className="text-center">
                                Лучшие решения для реабилитации – только проверенные производители
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-center mb-5">
                <Col>
                    <div className="p-4 bg-light rounded">
                        <h3 className="mb-3">SOCBOOK – место, где встречаются эксперты реабилитации и инновационные технологии!</h3>
                        <p className="mb-4">Регистрация доступна только для дипломированных специалистов и официально зарегистрированных организаций</p>
                        <Button as={Link} to="/register" variant="primary" size="lg">Присоединиться к сообществу</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}