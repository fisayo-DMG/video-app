import React, { useState } from "react";
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import Login from "./Login";
import Register from "./Register";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((state) => {
      return !state;
    });
  };
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Video App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <NavItem>
                <Login />
              </NavItem>
              <NavItem>
                {/* <NavLink><Button size='sm'>Register</Button></NavLink> */}
                <NavItem><Register /></NavItem>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>

    // <div>
    //    <Navbar color="dark" dark expand='sm' className='mb-5'>
    //      <Container>
    //     <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
    //     <NavbarToggler onClick={toggle} className="mr-2" />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className='ml-auto'>
    //         <NavItem>
    //           <NavLink href="/components/"><Login /></NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Collapse>
    //     </Container>
    //   </Navbar>
    // </div>
  );
};

export default AppNavbar;
