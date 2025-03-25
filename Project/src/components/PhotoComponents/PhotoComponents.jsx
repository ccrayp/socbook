import styled from "styled-components";
import {Button, ButtonGroup, Card, Carousel, Col, Image, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import classNames from 'classnames'

export const StyledPhotoCard = styled(Card)`
    border: 1px solid #1a73e8;
    border-radius: 8px;
`
export const StyledCarousel = styled(Carousel)`
    .carousel-control-prev,
    .carousel-control-next {
        width: 40px;
        height: 40px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.8;
        transition: opacity 0.2s;
        background: none; /* Убираем стандартный фон */

        &:hover {
            opacity: 1;
        }
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        background-color: #1a73e8;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-size: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .carousel-control-prev {
        left: 45px;
    }

    .carousel-control-next {
        right: 45px;
    }

    .carousel-indicators {
        button {
            background-color: #1a73e8;
            opacity: 0.4;
            width: 30px;
            height: 4px;
            border-radius: 2px;
            margin: 0 3px;
            transition: opacity 0.3s ease;

            &.active {
                opacity: 1;
            }
        }
    }
`;


const LikeButton = styled(Button)`
    &:hover {
        background-color: #e6032a;
    }
`

const CommentButton = styled(Button)`
    &:hover {
        background-color: #1a73e8;
    }
`

export function PhotoButtons() {
    return (
        <ButtonGroup size="sm" className={'float-end'}>
            <LikeButton variant="light" size="sm" aria-label="like">
                <Image src="/like.svg" width={30} height={30} />
            </LikeButton>
            <CommentButton variant="light" size="sm" aria-label="comment">
                <Image src="/comment.svg" width={30} height={30} />
            </CommentButton>
        </ButtonGroup>
    )
}

export function PhotoItem({path}) {

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    function ModalPhoto({path}) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Фотография</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center align-items-center"
                            style={{
                                minHeight: '50vh',
                                padding: 0,
                            }}>
                    <Image src={path}
                           style={{
                               maxHeight: '80vh',
                               maxWidth: '100%',
                               width: 'auto',
                               height: 'auto',
                               objectFit: 'contain',
                           }} fluid/>
                </Modal.Body>
                <Modal.Footer>
                    <PhotoButtons />
                    <Button variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <Col className="d-flex">
            <StyledPhotoCard className="w-100">
                <div style={{
                    maxHeight: '350px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Card.Img
                        variant="top"
                        src={path}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            cursor: 'pointer'
                        }}
                        onClick={handleShow}
                    />
                </div>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-2">Фотография</Card.Title>
                    <div className="mt-auto text-end">
                        <PhotoButtons />
                    </div>
                </Card.Body>
            </StyledPhotoCard>
            <ModalPhoto path={path}/>
        </Col>
    )
}

export function PhotoRows({photos = [], m = 'mb-4'}) {
    return (
        <Row xs={3} md={3} className={classNames('g-4', m)}>
            {photos.map((photo, index) => (
                <PhotoItem key={index} path={photo.path}/>
            ))}
        </Row>
    )
}

export function PhotoSlider({ photos = [] }) {
    if (!photos.length)
        return null;

    const photoGroups = [];
    for (let i = 0; i < photos.length; i += 3) {
        photoGroups.push(photos.slice(i, i + 3));
    }

    return (
        <StyledCarousel indicators controls className="mb-4">
            {photoGroups.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                    <PhotoRows photos={group} m={'mb-0'} />
                </Carousel.Item>
            ))}
        </StyledCarousel>
    );
}