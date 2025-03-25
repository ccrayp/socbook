import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import { Post, Posts, PostsSlider } from './PostComponents.jsx';

describe('Post', () => {
    const photoPath = 'photo';
    const textPath = 'text';
    const labelPath = 'Публикация'
    test('renders Post', () => {
        render(<Post photoPath={photoPath} textPath={textPath} labelPath={labelPath}/>);
        
        expect(screen.getByText(/Публикация/i)).toBeInTheDocument();
    });
});

describe('Posts', () => {
    const testPosts = [
        { photoPath: 'photo.jpg', textPath: 'text', labelPath: 'Публикация' }
    ];
    test('renders Posts', () => {
        render(<Posts posts={testPosts} />);

        expect(screen.getByRole('posts')).toBeInTheDocument();
    });
});

describe('PostsSlider', () => {
    const Posts = [
        { photoPath: 'photo.jpg', textPath: 'text', labelPath: 'Публикация' }
    ];
    test('renders PostSlider', () => {
        render(<PostsSlider Posts={Posts} />);

        expect(screen.getByRole('slider')).toBeInTheDocument();
    });
});