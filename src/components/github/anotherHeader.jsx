import React , {useState} from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import modkhabo from "/images/modkhabo.png"
import batman from "/images/logo.png"
export const AnotherHeader = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/" className=' navbar navbar-expand-lg bg-body-tertiary bg-white mt-2 '>
                <div className="container-fluid"><button onClick={() => navigate("/")} style={{ background: "none", border: "none" }}>
                    <img src={modkhabo} alt='Glass' id='image' /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarNav">
                        <Nav.Item>
                            <Nav.Link className='navBar-details' as={Link} to="/Batman"><img id='image' src={batman} alt='logo' width="30" height="24" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navBar-details' as={Link} to="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navBar-details' as={Link} to="/logIn">Log in</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navBar-details' as={Link} to="/About">
                                About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navBar-details' as={Link} to="/Contact">
                                contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='navBar-details' as={Link} to="/Github">
                                github
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                </div>
            </Nav>
        </>
    )
}
