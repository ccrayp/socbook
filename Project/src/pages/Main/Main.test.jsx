import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Main from './Main'

describe('Main', () => {
    test('renders Main', () => {
        render(
            <MemoryRouter>
                <Main />
            </MemoryRouter>);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});