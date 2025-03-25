import { Navbar, Nav, Form, Button, Container, InputGroup } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #fff !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0;

  .navbar-brand {
    font-weight: 700;
    font-size: 1.25rem;
    color: #1a73e8;
    margin-right: 2rem;
  }

  .search-form {
    width: 300px;
    margin-left: auto;
  }
`;

const NavItem = styled(Nav.Link)`
  position: relative;
  margin: 0 0.25rem;
  padding: 0.75rem 1.25rem;
  color: #5f6368 !important;
  font-weight: 500;
  text-decoration: none;
  border-radius: 8px;
  transition: all 1s ease;
    
  &:hover, &.active  {
    color: #1a73e8 !important;
    background: rgba(26, 115, 232, 0.08);
    border-left: 2px solid #1a73e8;
  }
`;

const SearchButton = styled(Button)`
  border-color: #ced4da;
  border-left: none;
  background-color: #f8f9fa;
  color: #495057;
  transition: all 0.2s;

  &:hover {
    background-color: #e9ecef;
    border-color: #ced4da;
    color: #495057;
  }
`;

export default function Header() {
    const location = useLocation();

    const navItems = [
        { path: "/specialists", description: "Специалисты" },
        { path: "/organizations", description: "Организации" },
        { path: "/manufacturers", description: "Производители" },
        { path: "/public_organizations", description: "Общественные организации" }
    ];

    return (
        <StyledHeader bg="light" expand="lg" sticky="top" role="header">
            <Container fluid="xxl">
                <Navbar.Brand as={Link} to="/">SOCBOOK</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto">
                        {navItems.map((item, index) => (
                            <NavItem
                                key={index}
                                as={Link}
                                to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                            >
                                {item.description}
                            </NavItem>
                        ))}
                    </Nav>
                    <Form className="search-form">
                        <InputGroup>
                            <Form.Control
                                type="search"
                                placeholder="Найдётся всё..."
                                className="border-end-0"
                            />
                            <SearchButton variant="outline-secondary">
                                <BiSearch size={18} />
                            </SearchButton>
                        </InputGroup>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </StyledHeader>
    );
}