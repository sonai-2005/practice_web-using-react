import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import modkhabo from "/images/modkhabo.png";
import batman from "/images/logo.png";

export const Header = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false); // Manages toggler state

    return (
        <Navbar expand="lg" bg="light" className="shadow-sm" expanded={expanded}>
            <Container>
                <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <img  className='blent' src={modkhabo} alt="Glass" width="50" />
                </Navbar.Brand>

                
                <Navbar.Toggle 
                    aria-controls="navbarNav" 
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />

                
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto" onClick={() => setExpanded(false)}>
                        <Nav.Link as={Link} className="blent" to="/Batman">
                            <img src={batman} alt="logo" width="30" height="24" />
                        </Nav.Link>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/logIn">Log in</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/Github">GitHub</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
