import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header'

describe('Header', () => {
    test('renders Header', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>);

        expect(screen.getByRole('header')).toBeInTheDocument();
    });
});