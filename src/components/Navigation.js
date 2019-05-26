import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return(
    <>
      <Navbar>
        <div className="container">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/dogs">Dogs</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}
