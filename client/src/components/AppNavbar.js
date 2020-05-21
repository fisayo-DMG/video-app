import React, { useState, useContext, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { AppContext } from "../appContext";
import AddVideo from "./AddVideo";
// import icon from "../icons8.png";
import icon from "../logo-icon.png";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    name,
    setTeacherStatus,
    teacherStatus,
    setStateName,
    addButton,
    setAddButton,
  } = useContext(AppContext);

  // useEffect(() => {

  // }, [])

  const toggle = () => {
    setIsOpen((state) => {
      return !state;
    });
  };
  return (
    <div>
      {/* <Navbar color="dark" dark expand="sm" className="mb-5"> */}
      <Navbar color="dark" dark expand="sm">
        <Container>
          {/* <NavbarBrand href="/">Video App</NavbarBrand> */}
          {/* <Link to='/'> <NavbarBrand>Video App</NavbarBrand></Link> */}
          <Link to="/">
            {" "}
            <NavbarBrand>
              <div style={{display: 'flex', width: '70px', marginRight: '10px', alignItems: 'center' }}>
              <img style={{ width: "50%", height: 'auto', marginRight: '10px'}} src={icon} alt="" />
              <span style={{fontSize: '1.3rem', fontWeight: 'bold'}}>Video</span>
              </div>
              
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              {!name && <NavItem>
                <Login />
              </NavItem>}
              {/* <NavLink><Button size='sm'>Register</Button></NavLink> */}
              {!name && (
                <NavItem>
                  <Register />
                </NavItem>
              )}
              {addButton && (
                <NavItem>
                  <AddVideo />
                </NavItem>
              )}
              {name && (
                <NavItem>
                  <NavLink>
                    <Button
                      onClick={() => {
                        setStateName("");
                        setTeacherStatus(false);
                        setAddButton(false);
                      }}
                      size="sm"
                    >
                      Log Out
                    </Button>
                  </NavLink>
                </NavItem>
              )}
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
