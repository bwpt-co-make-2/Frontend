import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom'

const NavStrap = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Co-Make</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/signup">Sign Up</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/signin">Sign in</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/issues">Issues</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavStrap