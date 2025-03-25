import { Container } from "react-bootstrap";
import { PhotoSlider } from "@components/PhotoComponents/PhotoComponents.jsx";
import { Posts } from "@components/PostComponents/PostComponents.jsx";
import { VideoSlider } from "@components/VideoComponents/VideoComponents.jsx";

export default function Feed() {
    const posts = JSON.parse(sessionStorage.getItem("posts")) || [];
    const photos = JSON.parse(sessionStorage.getItem("photos")) || [];
    const videos = JSON.parse(sessionStorage.getItem("videos")) || [];

    return (
            <Container role='feed'>
                <div className="pt-4">
                    <Posts posts={posts.slice(0, 1)} />
                    <PhotoSlider photos={photos} />
                    <Posts posts={posts.slice(1, 2)} />
                    <VideoSlider videos={videos} />
                    <Posts posts={posts.slice(2, 3)} />
                </div>
            </Container>
    );
}



