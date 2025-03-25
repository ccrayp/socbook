import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Organization from './Organization'

describe('Organization', () => {
    test('отображает заголовок "Производители"', () => {
        render(
            <MemoryRouter initialEntries={['/manufacturers']}>
                <Organization />
            </MemoryRouter>
        );
        expect(screen.getByRole('organization')).toBeInTheDocument()
    });
});