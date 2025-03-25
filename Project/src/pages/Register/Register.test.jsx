import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Register from './Register'

describe('Register', () => {
    test('renders Register', () => {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>);

        expect(screen.getByRole('register')).toBeInTheDocument();
    });
});