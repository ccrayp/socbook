import {useState} from "react";
import {Container, Button, Image, Form, InputGroup, Card, ListGroup, Row, Col} from 'react-bootstrap';
import ListItem from "@components/ListItem/ListItem.jsx";
import {useLocation, useParams, Link} from "react-router-dom";

export function Chat() {
    const {id} = useParams();
    const profile = JSON.parse(sessionStorage.getItem('friends')).find((f) => f.id.toString() === id);

    const [messages, setMessages] = useState([
        {id: 1, text: 'Привет! Как дела?', sender: 'them', time: '10:00'},
        {id: 2, text: 'Отлично, спасибо! А у тебя?', sender: 'me', time: '10:02'},
        {id: 3, text: 'Тоже всё хорошо. Давно не виделись!', sender: 'them', time: '10:05'},
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        // Добавляем сообщение пользователя
        const userMessage = {
            id: messages.length + 1,
            text: newMessage,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setNewMessage('');
    };

    return (
        <Container fluid role='chat' className="vh-100 d-flex flex-column p-0" style={{maxHeight: '85vh'}}>
            <Card className="border-bottom shadow-sm" style={{flex: '0 0 auto'}}>
                <Card.Body className="py-2">
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Button
                                as={Link}
                                to="/messenger"
                                variant="outline-primary"
                                className="me-2"
                            >
                                Назад
                            </Button>
                        </Col>
                        <Col xs="auto">
                            <Image
                                src={profile.photoPath}
                                roundedCircle
                                width={40}
                                height={40}
                                className="border"
                            />
                        </Col>
                        <Col>
                            <h5 className="mb-0">{profile.name}</h5>
                            <small className="text-muted">В сети</small>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <div
                className="flex-grow-1 p-3 overflow-auto"
                style={{
                    backgroundColor: '#f8f9fa',
                    minHeight: 0
                }}
            >
                <ListGroup variant="flush">
                    {messages.map((message) => (
                        <ListGroup.Item
                            key={message.id}
                            className="border-0 bg-transparent p-1"
                        >
                            <div
                                className={`d-flex mb-2 ${message.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}
                            >
                                <Card
                                    className={`${message.sender === 'me' ? 'bg-primary text-white' : 'bg-light'}`}
                                    style={{maxWidth: '75%'}}
                                >
                                    <Card.Body className="p-2">
                                        <p className="mb-1">{message.text}</p>
                                        <small
                                            className={`d-block text-end ${message.sender === 'me' ? 'text-white-50' : 'text-muted'}`}>
                                            {message.time}
                                        </small>
                                    </Card.Body>
                                </Card>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <Card className="border-top" style={{flex: '0 0 auto'}}>
                <Card.Body className="py-2">
                    <Form onSubmit={handleSendMessage}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Напишите сообщение..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="border-0"
                            />
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={!newMessage.trim()}
                            >
                                Отправить
                            </Button>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export function ChatsList({chats = []}) {
    return (
        (chats.length === 0 ? (
            <h1>Список чатов пуст</h1>
        ) : (
            <div role='list'>
                {chats.map((chat, index) => (
                    <ListGroup.Item key={index}>
                        <ListItem name={chat.name} photoPath={chat.photoPath} id={chat.id} mode={'chats'}/>
                    </ListGroup.Item>
                ))}
            </div>)
        )
    )
}

export default function Messenger() {

    const location = useLocation()

    return (
        <Container className="pt-4" role='messenger'>
            {location.pathname === '/messenger' ? (<ChatsList chats={JSON.parse(sessionStorage.getItem('friends'))} />) : location.pathname.startsWith('/messenger/chat/') ? <Chat /> : null}
        </Container>
    );
}