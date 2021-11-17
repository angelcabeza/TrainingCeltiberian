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
                <Nav className={styles.titulo}>
                    <Link to="/" className={styles.links}>FootApp</Link>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="p-3">
                        <Link to="/teams/add" className={styles.links}>Add-Team</Link>
                    </Nav >
                    <Nav.Item className="ml-1">
                        <SearchBarContainer/>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
</Navbar>
    );
}

export default Header;