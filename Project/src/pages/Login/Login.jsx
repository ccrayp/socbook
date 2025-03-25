import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть проверка данных на сервере
        if (formData.email && formData.password) {
            console.log('Авторизация:', formData);
            navigate('/profile/posts');
        } else {
            setError('Введите email и пароль');
        }
    };

    return (
        <Container className="py-5" role="login">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4">Вход в SOCBOOK</h2>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2 mt-4">
                                    <Button variant="primary" type="submit" size="lg">
                                        Войти
                                    </Button>
                                </div>
                            </Form>

                            <div className="text-center mt-3">
                                <span>Нет аккаунта? </span>
                                <Link to="/register">Зарегистрироваться</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
