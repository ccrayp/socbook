import styled from "styled-components";
import {Button, ButtonGroup, Card, Carousel, Col, Image, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import classNames from 'classnames'
import {PhotoItem, PhotoRows, StyledCarousel} from "@components/PhotoComponents/PhotoComponents.jsx";

export const StyledVideoCard = styled(Card)`
    border: 1px solid #1a73e8;
    border-radius: 8px;
`

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

export function VideoButtons() {
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

export function VideoItem({path}) {

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    function ModalVideo({path}) {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Видео</Modal.Title>
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
                    <VideoButtons />
                    <Button variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <Col className="d-flex">
            <StyledVideoCard className="w-100">
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
                    <Card.Title className="mb-2">Видео</Card.Title>
                    <div className="mt-auto text-end">
                        <VideoButtons />
                    </div>
                </Card.Body>
            </StyledVideoCard>
            <ModalVideo path={path}/>
        </Col>
    )
}

export function VideoRows({videos = [], m = 'mb-4'}) {
    return (
        <Row xs={3} md={3} className={classNames('g-4', m)}>
            {videos.map((video, index) => (
                <VideoItem key={index} path={video.path}/>
            ))}
        </Row>
    )
}

export function VideoSlider({ videos = [] }) {
    if (!videos.length)
        return null;

    const videoGroups = [];
    for (let i = 0; i < videos.length; i += 3) {
        videoGroups.push(videos.slice(i, i + 3));
    }

    return (
        <StyledCarousel indicators controls className="mb-4">
            {videoGroups.map((group, groupIndex) => (
                <Carousel.Item key={groupIndex}>
                    <VideoRows videos={group} m={'mb-0'} />
                </Carousel.Item>
            ))}
        </StyledCarousel>
    );
}