import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        userType: 'specialist',
        organization: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Введите имя';
        if (!formData.email) newErrors.email = 'Введите email';
        if (!formData.password || formData.password.length < 6) newErrors.password = 'Пароль должен быть не менее 6 символов';
        if (formData.userType === 'organization' && !formData.organization) newErrors.organization = 'Введите название организации';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Здесь должна быть логика отправки данных на сервер
            console.log('Регистрация:', formData);
            setSuccess(true);
            setTimeout(() => navigate('/progile/posts'), 2000);
        }
    };

    return (
        <Container className="py-5" role='register'>
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4">Регистрация в SOCBOOK</h2>

                            {success && (
                                <Alert variant="success" className="text-center">
                                    Регистрация прошла успешно! Перенаправляем на страницу входа...
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Тип аккаунта</Form.Label>
                                    <Form.Select
                                        name="userType"
                                        value={formData.userType}
                                        onChange={handleChange}
                                    >
                                        <option value="specialist">Специалист</option>
                                        <option value="organization">Организация</option>
                                        <option value="manufacturer">Производитель ТСР</option>
                                        <option value="public">Общественная организация</option>
                                    </Form.Select>
                                </Form.Group>

                                {formData.userType === 'organization' && (
                                    <Form.Group className="mb-3">
                                        <Form.Label>Название организации</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            isInvalid={!!errors.organization}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.organization}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                )}

                                <Form.Group className="mb-3">
                                    <Form.Label>{formData.userType === 'specialist' ? 'ФИО' : 'Контактное лицо'}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Повторите пароль</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-grid gap-2 mt-4">
                                    <Button variant="primary" type="submit" size="lg">
                                        Зарегистрироваться
                                    </Button>
                                </div>
                            </Form>

                            <div className="text-center mt-3">
                                <span>Уже есть аккаунт? </span>
                                <Link to="/login">Войти</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}