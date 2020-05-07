import React, { useState } from 'react';
import {NavLink as RRNavLink } from 'react-router-dom';
import NestedModal from './nestedmodal'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="dark" light expand="md">
        <NavbarBrand className="text-white" href="/">MeshaFashion</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>


            <NavItem>
              <NavLink tag={RRNavLink} exact  to={"/"} activeClassName="active" className="text-white">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact  to={"/about"} activeClassName="active" className="text-white">About</NavLink>
            </NavItem>
            
           
          </Nav>
          
            <NestedModal buttonLabel="Login"  />
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topnav;