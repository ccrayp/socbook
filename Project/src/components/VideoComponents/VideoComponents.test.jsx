import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import { VideoItem, VideoButtons, VideoSlider } from './VideoComponents.jsx';

describe('VideoItem', () => {
    const photoPath = 'photo1.jpg';
    test('renders VideoItem', () => {
        render(<VideoItem path={photoPath} />);

        expect(screen.getByText(/Видео/i)).toBeInTheDocument();
    });
});

describe('VideoButtons', () => {
    test('renders VideoButtons', () => {
        render(<VideoButtons />);

        expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /comment/i })).toBeInTheDocument();
    });
});

describe('VideoSlider', () => {
    const videos = [
        { path: 'video.jpg' }
    ];
    test('renders VideoSlider', () => {
        render(<VideoSlider videos={videos} />);

        expect(screen.getByText(/Видео/i)).toBeInTheDocument();
    });
});