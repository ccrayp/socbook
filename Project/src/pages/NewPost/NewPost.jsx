import {useState} from "react";
import {Link} from "react-router-dom";
import { Container, Row, Col, Card, Button, Image, Form } from 'react-bootstrap';

export default function CreatePostPage() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        isPublic: true,
        image: null
    });
    const [preview, setPreview] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({ ...prev, image: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть отправка данных на сервер
        console.log('Создание публикации:', formData);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <Container className="py-5" role="new_post">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card className="shadow">
                        <Card.Body className="p-4">
                            <h2 className="text-center mb-4">Создать новую запись</h2>

                            {success && (
                                <Alert variant="success" className="text-center">
                                    Запись успешно создана!
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Заголовок</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Введите заголовок записи"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Текст записи</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        name="content"
                                        value={formData.content}
                                        onChange={handleChange}
                                        placeholder="Напишите содержание записи..."
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Тип записи</Form.Label>
                                    <Form.Select
                                    >
                                        <option value="photo">Фотография</option>
                                        <option value="video">Видео</option>
                                        <option value="publication">Публикация</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Изображение (необязательно)</Form.Label>
                                    <Form.Control
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {preview && (
                                        <div className="mt-3">
                                            <Image src={preview} thumbnail style={{ maxHeight: '200px' }} />
                                        </div>
                                    )}
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Check
                                        type="checkbox"
                                        label="Публичная запись"
                                        name="isPublic"
                                        checked={formData.isPublic}
                                        onChange={handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                        {formData.isPublic
                                            ? 'Запись будет видна всем пользователям'
                                            : 'Запись будет видна только вашим подписчикам'}
                                    </Form.Text>
                                </Form.Group>

                                <div className="d-flex justify-content-end gap-3">
                                    <Button variant="outline-secondary" as={Link} to="/profile/posts">
                                        Отмена
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Опубликовать
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}