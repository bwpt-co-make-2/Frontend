import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const NavStrap = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Co-Make</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link to="/signup" className="nav-link">Sign Up</Link>
          </NavItem>
          <NavItem>
            <Link to="/signin" className="nav-link">Sign in</Link>
          </NavItem>
          <NavItem>
            <Link to="/issues" className="nav-link">Issues</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavStrap