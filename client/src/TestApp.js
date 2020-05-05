import React, { useState } from "react";
import "./App.css";
import GoogleBtn from "./GoogleBtn";
// import GoogleLogin from "react-google-login";

const TestApp = () => {
  // const [name, setName] = useState("");

  // const responseGoogle = (response) => {
  //   console.log(response);
  //   setName(response.profileObj.name);
  // };

  return (
    <div className="App">
      <GoogleBtn />
      {/* {!name && <h3>Login with Google</h3>}
      {name && <h3>Welcome {name.split(" ")[0]}</h3>}
      {!name && (
        <GoogleLogin
          clientId="708483733729-napcqivj73qrqm83b2akhu3dmq26h9bj.apps.googleusercontent.com"
          // render={renderProps => (
          //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
          // )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          // responseType='code'
          // isSignedIn={true}
        />
      )} */}
    </div>
  );
};

export default TestApp;
