import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import { PhotoItem, PhotoButtons, PhotoSlider } from './PhotoComponents.jsx';

describe('PhotoItem', () => {
    const photoPath = 'photo1.jpg';
    test('renders PhotoItem', () => {
        render(<PhotoItem path={photoPath} />);

        expect(screen.getByText(/фотография/i)).toBeInTheDocument();
    });
});

describe('PhotoButtons', () => {
    test('renders PhotoButtons', () => {
        render(<PhotoButtons />);

        expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /comment/i })).toBeInTheDocument();
    });
});

describe('PhotoSlider', () => {
    const photos = [
        { path: 'photo1.jpg' }
    ];
    test('renders PhotoSlider', () => {
        render(<PhotoSlider photos={photos} />);

        expect(screen.getByText(/фотография/i)).toBeInTheDocument();
    });
});