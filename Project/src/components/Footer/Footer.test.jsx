import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer'

describe('Footer', () => {
    test('renders Footer', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>);

        expect(screen.getByRole('footer')).toBeInTheDocument();
    });
});