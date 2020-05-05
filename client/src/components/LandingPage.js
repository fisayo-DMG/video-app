import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import {AppContext} from '../appContext';

const LandingPage = () => {

  const CLIENT_ID =
    "708483733729-napcqivj73qrqm83b2akhu3dmq26h9bj.apps.googleusercontent.com";

  const {name, responseGoogle} = useContext(AppContext);

  if(name) {
    return <Redirect to='/home' />
  }

  return (
    <div>
      {console.log('HOME')}
      <h1>Welcome</h1>
      <h3>Login with Google</h3>
      <GoogleLogin
        clientId={CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        buttonText="Login"
      />
    </div>
  );
};

export default LandingPage;
