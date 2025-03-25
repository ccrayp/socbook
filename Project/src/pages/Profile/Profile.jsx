import { Container, Row, Card, Col, Button, Image, ButtonGroup, Modal } from "react-bootstrap";
import { PhotoSlider, PhotoRows, StyledPhotoCard, PhotoButtons } from "@components/PhotoComponents/PhotoComponents.jsx";
import { VideoSlider, VideoRows } from "@components/VideoComponents/VideoComponents.jsx";
import { PostsSlider, Posts } from "@components/PostComponents/PostComponents.jsx";
import { useLocation, Link, useParams } from "react-router-dom";
import { useState } from "react";

function ProfileInfo(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const { photoPath, name, birthDate, address, group, description } =
    props.profile;

  function ModalPhoto({ path }) {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Фотография</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center align-items-center"
          style={{
            minHeight: "50vh",
            padding: 0,
          }}
        >
          <Image
            src={path}
            style={{
              maxHeight: "80vh",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            fluid
          />
        </Modal.Body>
        <Modal.Footer>
          <PhotoButtons />
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <StyledPhotoCard className="mb-4 mt-4">
      <Row>
        <Col xs={4}>
          <Card.Img
            onClick={handleShow}
            src={photoPath}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              cursor: "pointer",
              borderRight: "1px solid #1a73e8",
              borderStartEndRadius: "0",
              borderEndEndRadius: "0",
            }}
          ></Card.Img>
        </Col>
        <Col xs={8}>
          <Card.Body>
            <h1>{name}</h1>
            <br />
            <h5>Дата рождения: {birthDate}</h5>
            <h5>Адрес: {address}</h5>
            <h5>Группа: {group}</h5>
            <br />
            <h5>Описание: </h5>
            <p>{description}</p>
          </Card.Body>
        </Col>
        <ModalPhoto path={photoPath} />
      </Row>
    </StyledPhotoCard>
  );
}

function ProfileNavigation({ id }) {
  let path;
  if (!id) path = "profile";
  else path = id.toString();

  return (
    <ButtonGroup className="mb-4 w-100">
      <Button
        as={Link}
        to={`/${path}/posts`}
        variant={
          location.pathname === `/${path}/posts` ? "primary" : "outline-primary"
        }
      >
        Публикации
      </Button>
      <Button
        as={Link}
        to={`/${path}/photos`}
        variant={
          location.pathname === `/${path}/photos`
            ? "primary"
            : "outline-primary"
        }
      >
        Фотографии
      </Button>
      <Button
        as={Link}
        to={`/${path}/videos`}
        variant={
          location.pathname === `/${path}/videos`
            ? "primary"
            : "outline-primary"
        }
      >
        Видео
      </Button>
      {path === "profile" ? (
        <Button as={Link} to={`/profile/new_post`} variant={"outline-primary"}>
          Новая запись
        </Button>
      ) : (
        <Button variant={"outline-primary"}>
          {id < 21 ? "Удалить из друзей" : "В друзья"}
        </Button>
      )}
    </ButtonGroup>
  );
}

function myProfile() {
  const location = useLocation();
  const photos = JSON.parse(sessionStorage.getItem("photos"));
  const videos = JSON.parse(sessionStorage.getItem("videos"));
  const posts = JSON.parse(sessionStorage.getItem("posts"));

  {
    switch (location.pathname) {
      case "/profile/photos":
        return (
          <>
            <PhotoSlider photos={photos} />
            <PhotoRows photos={photos} />
          </>
        );
      case "/profile/videos":
        return (
          <>
            <VideoSlider videos={videos} />
            <VideoRows videos={videos} />
          </>
        );
      case "/profile/posts":
        return (
          <>
            <PostsSlider posts={posts} />
            <Posts posts={posts} />
          </>
        );
    }
  }
}

function userProfile() {
  const loc = location.pathname.split("/");

  let photos = [],
    videos = [],
    posts = [];

  const paths = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=1920",
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=1280",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=800",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=1024",
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=500",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=1600",
  ];

  for (let i = 0; i < 6; i++) {
    photos.push({ path: paths[i] });
    videos.push({ path: paths[i] });
    posts.push({
      labelPath: "Название публикации",
      photoPath: paths[i],
      textPath: "Текст публикации",
    });
  }

  {
    switch (loc[2]) {
      case "photos":
        return (
          <>
            <PhotoSlider photos={photos} />
            <PhotoRows photos={photos} />
          </>
        );
      case "videos":
        return (
          <>
            <VideoSlider videos={videos} />
            <VideoRows videos={videos} />
          </>
        );
      case "posts":
        return (
          <>
            <PostsSlider posts={posts} />
            <Posts posts={posts} />
          </>
        );
    }
  }
}

function renderContent() {
  const location = useLocation();
  return location.pathname.split("/")[1] === "profile"
    ? myProfile()
    : userProfile();
}

export default function Profile() {
  const location = useLocation();
  const { id } = useParams();

  let profile = null;
  if (location.pathname.startsWith("/profile")) {
    profile = JSON.parse(sessionStorage.getItem("profile"));
  } else {
    profile = JSON.parse(sessionStorage.getItem("friends")).find(
      (f) => f.id.toString() === id
    );
    if (profile == null)
      profile = JSON.parse(sessionStorage.getItem("requests")).find(
        (f) => f.id.toString() === id
      );
    const details = JSON.parse(sessionStorage.getItem("users")).find(
      (f) => f.id.toString() === id
    );
    Object.assign(profile, details);
  }

  return (
    <Container>
      <div className={"pt-1"}>
        <ProfileInfo profile={profile} />
        <ProfileNavigation id={id} />
        {renderContent()}
      </div>
    </Container>
  );
}
