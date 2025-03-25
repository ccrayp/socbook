import '@testing-library/jest-dom';
import { MemoryRouter, useParams } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Messenger, {ChatsList, Chat} from './Messenger'
import { expect, vi } from 'vitest';

describe('Messenger', () => {
    test('renders Messenger', () => {
        render(
            <MemoryRouter>
                <Messenger />
            </MemoryRouter>);

        expect(screen.getByRole('messenger')).toBeInTheDocument();
    });

    test('renders ChatsList', () => {
        const chats = [{name: 'name', photoPath: 'path', id: '1'}]
        render(
            <MemoryRouter>
                <ChatsList chats={chats} />
            </MemoryRouter>)
        expect(screen.getByRole('list')).toBeInTheDocument()
    })

    
    vi.mock('react-router-dom', async () => {
        const actual = await vi.importActual('react-router-dom');
        return {
            ...actual,
            useParams: vi.fn(() => ({ id: '123' })),
        };
    });

    const mockSessionStorage = {
        getItem: vi.fn(() => JSON.stringify([{ id: '123', name: 'Иван Иванов', photoPath: '/avatar.jpg' }])),
    };

    beforeAll(() => {
        Object.defineProperty(window, 'sessionStorage', {
            value: mockSessionStorage,
            writable: true,
        });
    });

    test('renders Chat', () => {
        render(
            <MemoryRouter>
                <Chat />
            </MemoryRouter>
        )
        expect(screen.getByRole('chat')).toBeInTheDocument()
    })
});