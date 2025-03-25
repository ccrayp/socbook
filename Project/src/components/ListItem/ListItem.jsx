import { useState } from "react";
import { Button, Col, Image, Modal, Row, Card } from "react-bootstrap";
import { PhotoButtons } from "@components/PhotoComponents/PhotoComponents.jsx";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Button)`
  line-height: 1.5;
  font-size: 1rem;
  margin-right: 10px;
`;

function moveTo(from, to, id) {
  const object = JSON.parse(sessionStorage.getItem(from)).find(
    (p) => p.id === id
  );

  const fromResponse = JSON.parse(sessionStorage.getItem(from)) || [];
  const updatedFrom = fromResponse.filter((item) => item.id !== object.id);
  sessionStorage.setItem(from, JSON.stringify(updatedFrom));

  const toResponse = JSON.parse(sessionStorage.getItem(to)) || [];
  toResponse.push(object);
  sessionStorage.setItem(to, JSON.stringify(toResponse));

  // console.log('from: ' + from + ' to: ' + to + ' id: ' + id)
}

function remove({ id }) {
  const requests = JSON.parse(sessionStorage.getItem("requests"));
  requests.splice(id, 1);
  sessionStorage.setItem("requests", JSON.stringify(requests));
}

export function FriendsButtons({ id }) {
  return (
    <div role="buttons">
      <Button
        variant="light"
        size="sm"
        style={{
          border: "1px solid #dee2e6",
          lineHeight: "1.5",
          fontSize: "1rem",
          marginRight: "10px",
        }}
        as={Link}
        to={`/messenger/chat/${encodeURIComponent(id)}`}
      >
        Написать
      </Button>
      <StyledButton
        variant="outline-danger"
        size="sm"
        onClick={() => moveTo("friends", "requests", id)}
      >
        Удалить
      </StyledButton>
    </div>
  );
}

export function RequestsButtons({ id }) {
  return (
    <div role="buttons">
      <StyledButton
        variant="outline-success"
        size="sm"
        onClick={() => moveTo("requests", "friends", id)}
      >
        Принять
      </StyledButton>
      <StyledButton
        variant="outline-danger"
        size="sm"
        onClick={() => remove(id)}
      >
        Отклонить
      </StyledButton>
    </div>
  );
}

export function ChatsButtons({ id }) {
  return (
    <div role="buttons">
      <Button
        variant="light"
        as={Link}
        to={`/messenger/chat/${encodeURIComponent(id)}`}
        size="sm"
        style={{
          border: "1px solid #dee2e6",
          lineHeight: "1.5",
          fontSize: "1rem",
          marginRight: "10px",
        }}
      >
        Написать
      </Button>
    </div>
  );
}

function Buttons({ mode, id }) {
  return mode === "friends" ? (
    <FriendsButtons id={id} />
  ) : mode === "requests" ? (
    <RequestsButtons id={id} />
  ) : mode === "chats" ? (
    <ChatsButtons id={id} />
  ) : null;
}

export default function ListItem({ name, photoPath, id, mode = "" }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className="mb-3 shadow-sm" style={{ borderRadius: "15px" }}>
      <Card.Body className="p-3">
        <Row className="align-items-center">
          <Col xs="auto">
            <Image
              onClick={handleShow}
              src={photoPath}
              roundedCircle
              width={70}
              height={70}
              style={{
                cursor: "pointer",
                objectFit: "cover",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              className="hover-zoom"
            />
          </Col>
          <Col className="ps-0">
            <Link
              to={
                mode === "chats"
                  ? `/messenger/chat/${encodeURIComponent(id)}`
                  : `/${encodeURIComponent(id)}/posts`
              }
              className="text-decoration-none"
              style={{ color: "#212529" }}
            >
              <h5 className="mb-0 fw-bold">{name}</h5>
              <small className="text-muted">
                Последнее отправленное/полученное сообщение
              </small>
            </Link>
          </Col>
          <Col xs="auto">
            <Buttons mode={mode} id={id} />
          </Col>
        </Row>
      </Card.Body>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center align-items-center p-0"
          style={{ minHeight: "50vh" }}
        >
          <Image
            src={photoPath}
            style={{
              maxHeight: "70vh",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            fluid
          />
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <PhotoButtons />
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
