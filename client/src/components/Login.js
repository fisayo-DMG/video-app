import React, { useState, useContext } from "react";
import GoogleLogin from "react-google-login";
import { AppContext } from "../appContext";
import { NavLink, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const Login = () => {
  const CLIENT_ID =
    "708483733729-napcqivj73qrqm83b2akhu3dmq26h9bj.apps.googleusercontent.com";

  const { name, setStateName } = useContext(AppContext);

  const responseGoogle = (response) => {
    console.log(response);
    if (responseGoogle) {
      setStateName(response.profileObj.name);
    }
    toggle();
  };


  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal((state) => !state);
  };

  return (
    <>
      <NavLink href="#" onClick={toggle}>
        <Button size="sm">Login</Button>
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody className="center">
          <GoogleLogin
            clientId={CLIENT_ID}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            buttonText="Login with Google"
          />
          {/* <GoogleLogin
            clientId={CLIENT_ID}
            render={(renderProps) => (
              <Button
                size="sm"
                onClick={() => {
                  console.log('Double Click')
                  renderProps.onClick()
                }}
                // onClick={() => console.log('Click')}
                disabled={renderProps.disabled}
              >
                <div><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt=""/>
                Login</div>
              </Button>

              // <div class="row">
              //                   <div class="col-md-12"> <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Signup Using Google</a> </div>
              //               </div>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
        </ModalBody>
      </Modal>

      {/* <GoogleLogin
          clientId={CLIENT_ID}
          render={(renderProps) => (
            <Button
            size='sm'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login
            </Button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        /> */}
    </>
  );
};

export default Login;
