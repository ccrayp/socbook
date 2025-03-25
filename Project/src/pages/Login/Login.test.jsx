import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Login from './Login'

describe('Login', () => {
    test('renders Login', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>);

        expect(screen.getByRole('login')).toBeInTheDocument();
    });
});