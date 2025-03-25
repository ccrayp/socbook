import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound'

describe('NotFound', () => {
    test('renders NotFound', () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>);

        expect(screen.getByRole('not_found')).toBeInTheDocument();
    });
});