import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './styles.module.css'
import SearchBarContainer from '../../containers/search-bar.container';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Nav } from 'react-bootstrap';


const Header: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">FootApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/add">Add-Team</Nav.Link>
                    </Nav>
                    <Nav>
                        <SearchBarContainer/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
</Navbar>
    );
}

export default Header;