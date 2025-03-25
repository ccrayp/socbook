import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Nav, Offcanvas, Button, Image} from 'react-bootstrap';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    position: fixed;
    z-index: 100;
`

const SidebarItem = styled(Nav.Link)`
    margin: 0.25rem 0 0.25rem 0.25rem;
    padding: 0.75rem 1.25rem;
    text-decoration: none;
    color: black;
    border-radius: 0.75rem;
    transition: 1s ease;
    width: 360px;

    &:hover, &.active {
        color: #1a73e8;
        background-color: #1a73e830;
        border-left: 2px solid #1a73e8;
    }

    img {
        height: 30px;
        width: 30px;
        margin-right: 0.5rem;
    }
`

const MenuButton = styled(Button)`
    position: fixed;
    top: 75px;
    left: 15px;
    z-index: 99;
    background-color: white;
    color: #1a73e8;
    border-radius: 8px;
    width: 80px;
    height: 40px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    
    &:hover {
        border: 2px solid #1a73e8;
    }
    
    @media (max-width: 800px) {
        top: 15px;
    }
`

export default function Sidebar() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const location = useLocation();

    const items = [
        { path: "/", description: "Главная", icon: "/main.svg" },
        { path: "/profile/posts", description: "Мой профиль", icon: "/logo.svg" },
        { path: "/feed", description: "Лента новостей", icon: "/feed.svg" },
        { path: "/messenger", description: "Мессенджер", icon: "/messenger.svg" },
        { path: "/friends", description: "Друзья", icon: "/friends.svg" },
        { path: "/profile/new_post", description: "Новая запись", icon: "/new_post.svg" },
        { path: "/settings", description: "Настройки", icon: "/settings.svg" }
    ];

    return (
        <>
            <MenuButton onClick={handleShow} aria-label="Открыть меню" role="sidebar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 5H17.5" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M2.5 10H17.5" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M2.5 15H17.5" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </MenuButton>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Меню</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <SidebarContainer>
                        <Nav className="flex-column">
                            {items.map((item, index) => (
                                <SidebarItem
                                    key={index}
                                    as={Link}
                                    to={item.path}
                                    className={location.pathname === item.path ? 'active' : ''}
                                    onClick={handleClose}
                                >
                                    <img className="sidebar-icon" src={item.icon} alt={item.description} />
                                    <span className="sidebar-text">{item.description}</span>
                                </SidebarItem>
                            ))}
                        </Nav>
                    </SidebarContainer>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}