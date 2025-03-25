import {useState} from "react";
import {Button, Card, Carousel, Col, Image, Modal, Row} from "react-bootstrap";
import {PhotoButtons, StyledCarousel, StyledPhotoCard} from "@components/PhotoComponents/PhotoComponents.jsx";
import classNames from "classnames";

export function Post({m='mb-4', labelPath, photoPath, textPath}) {

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    function ModalPost({ labelPath, photoPath, textPath }) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{labelPath}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: 0 }}>
                    {/* Блок с изображением */}
                    <div className="d-flex justify-content-center align-items-center"
                         style={{
                             minHeight: '50vh',
                             backgroundColor: '#f8f9fa', // Фон на случай если изображение маленькое
                             padding: '20px 0'
                         }}>
                        <Image
                            src={photoPath}
                            style={{
                                maxHeight: '60vh',
                                maxWidth: '100%',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                            fluid
                        />
                    </div>

                    {/* Блок с текстом */}
                    <div style={{
                        padding: '20px',
                        borderTop: '1px solid #dee2e6' // Граница между изображением и текстом
                    }}>
                        <p style={{ margin: 0 }}>{textPath}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                    <PhotoButtons />
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <StyledPhotoCard className={classNames(" mt-1", m)}>
            <Row>
                <Col xs={4}>
                    <Card.Img src={photoPath} style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        borderRight: '1px solid #1a73e8',
                        borderEndStartRadius: '0',
                        borderStartEndRadius: '0',
                        borderEndEndRadius: '0'
                    }}></Card.Img>
                </Col>
                <Col xs={8}>
                    <Card.Body>
                        <Card.Title>{labelPath}</Card.Title>
                        <Card.Text>{textPath}</Card.Text>
                    </Card.Body>
                </Col>
                <ModalPost labelPath={labelPath} textPath={textPath} photoPath={photoPath}/>
            </Row>
            <Card.Footer>
                <Button onClick={handleShow}>Читать полностью</Button>
                <PhotoButtons />
            </Card.Footer>
        </StyledPhotoCard>
    )
}

export function Posts({posts = []}) {
    return (
        <div role="posts">
            {posts.map((post, index) => {
                return <Post key={index} photoPath={post.photoPath} labelPath={post.labelPath} textPath={post.textPath}/>
            })}
        </div>
    )
}

export function PostsSlider({posts = []}) {
    return (
        <StyledCarousel className="mb-4" role="slider">
            {posts.map((post, index) => {
                return (
                    <Carousel.Item key={index}>
                        <Post m={'mb-0'} photoPath={post.photoPath} labelPath={post.labelPath} textPath={post.textPath}/>
                    </Carousel.Item>
                )
            })}
        </StyledCarousel>
    )
}