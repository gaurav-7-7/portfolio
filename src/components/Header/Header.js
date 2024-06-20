import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import logo from '../../assets/favicon.png';
import './header.css'; // Import your custom CSS file

const Header = () => {
  const [selected, setSelected] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  const handleClick = (path) => {
    setSelected(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <Image src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/about" onClick={() => handleClick('/about')} className={`custom-nav-link ${selected === '/about' ? 'active' : ''}`}>About</Nav.Link>
          <Nav.Link as={Link} to="/experience" onClick={() => handleClick('/experience')} className={`custom-nav-link ${selected === '/experience' ? 'active' : ''}`}>Experience</Nav.Link>
          <Nav.Link as={Link} to="/projects" onClick={() => handleClick('/projects')} className={`custom-nav-link ${selected === '/projects' ? 'active' : ''}`}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/resume" onClick={() => handleClick('/resume')} className={`custom-nav-link ${selected === '/resume' ? 'active' : ''}`}>Resume</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={() => handleClick('/contact')} className={`custom-nav-link ${selected === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='social-icon' href="https://github.com/gaurav-7-7" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} />
          </Nav.Link>
          <Nav.Link className='social-icon' href="https://www.linkedin.com/in/gauravsingh-bit/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} />
          </Nav.Link>
          <Nav.Link className='social-icon' href="https://leetcode.com/u/gaurav-7-7/" target="_blank" rel="noopener noreferrer">
            <FaLaptopCode size={25} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
