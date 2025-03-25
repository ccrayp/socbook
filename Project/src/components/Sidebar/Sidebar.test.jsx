import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar'

describe('Sidebar', () => {

    beforeAll(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });
    });

    test('renders Sidebar', () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>);

        expect(screen.getByRole('sidebar')).toBeInTheDocument();
    });
});