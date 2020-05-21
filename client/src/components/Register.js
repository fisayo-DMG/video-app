import React, { useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import { AppContext } from "../appContext";
import { NavLink, Button, Modal, ModalHeader, ModalBody, Input, L } from "reactstrap";


const Register = () => {
  const CLIENT_ID =
  "708483733729-napcqivj73qrqm83b2akhu3dmq26h9bj.apps.googleusercontent.com";

  // const [teacherStatus, setTeacherStatus] = useState(false)

const { name, setStateName, setTeacherStatus, teacherStatus } = useContext(AppContext);

const responseGoogle = (response) => {
  console.log(response);
  if (responseGoogle) {
    setStateName(response.profileObj.name);
  }
  toggle();
};


  const [modal, setModal] = useState(false);
  // const [teacherStatus, setTeacherStatus] = useState(false);

  const toggle = () => {
    setModal((state) => !state);
  };

  return (
    <>
      <NavLink href="#" onClick={toggle}>
        <Button size="sm">Register</Button>
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody className="center">
          <GoogleLogin
            onClick={() => console.log("click")}
            clientId={CLIENT_ID}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            buttonText="Register with Google"
          />

          <div className='checkbox-wrapper'>
            {/* <div className='checkbox'></div> */}
           
            <input onChange={() => {
              setTeacherStatus((status) => !status)
            }} checked={teacherStatus} className='checkbox' id='checkbox' type='checkbox' style={{marginRight: '5px'}}/> <label htmlFor="checkbox" style={{marginBottom: '2px'}}>I'm a Teacher</label>
            </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Register
