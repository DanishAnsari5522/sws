//navigation 

import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/navigation/RootNavigation.css'
import { FaFingerprint } from 'react-icons/fa'


function RootNavigation() {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><FaFingerprint className="text-white icon" /> DevDanish</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="nav-item text-secondary">Home</Link>
                                <Link to="/contactus" className="nav-item text-secondary">services</Link>
                                <Link to="/products" className="nav-item text-secondary">products</Link>
                            </Nav>
                            <Nav>
                                <Nav.Link eventKey={2} href="#memes"></Nav.Link>
                                <Button variant="outline-success">Search</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default RootNavigation