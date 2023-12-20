import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaNewspaper, FaLaptop, FaBriefcase, FaApple } from 'react-icons/fa';

const NewsNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/" className="font-weight-bold">News Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto ">
          <Nav.Link href="/tesla-news" className="nav-link mr-5">
            <FaLaptop className="mr-1" />Tesla News
          </Nav.Link>
          <Nav.Link href="/tech-news" className="nav-link mr-5">
            <FaNewspaper className="mr-1" />Tech News
          </Nav.Link>
          <Nav.Link href="/business-news" className="nav-link mr-5">
            <FaBriefcase className="mr-1" />Business News
          </Nav.Link>
          <Nav.Link href="/apple-news" className="nav-link mr-5 ">
            <FaApple className="mr-1" />Apple Related News
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NewsNavbar;
