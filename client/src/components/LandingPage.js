import React, { useContext, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import { AppContext } from "../appContext";
import VideoList from "./VideoList";
import Home from "./Home";

const LandingPage = () => {
  const CLIENT_ID =
    "708483733729-napcqivj73qrqm83b2akhu3dmq26h9bj.apps.googleusercontent.com";

  const { name, responseGoogle, teacherStatus, setAddButton } = useContext(AppContext);

  // if(name) {
  //   return <Redirect to='/home' />
  // }

  // useEffect(() => {
  //   // if(teacherStatus) {
  //   //   setAddButton(true)
  //   // }
  //   setAddButton(teacherStatus)
  // })

  useEffect(() => {
    // if(teacherStatus) {
    //   setAddButton(true)
    // }
    setAddButton(teacherStatus)
  }, [])



  // if (name) {
  //   return (
  //     <div>
  //       <VideoList />
  //     </div>
  //   );
  // }

  if (name) {
    return (
      <div>
        <Home />
      </div>
    );
  }

  return (
    <div className="container">
      {console.log("HOME")}
      <h1 style={{textAlign: 'center', fontWeight: 'bold', marginTop: '50px'}}>Welcome</h1>
      {/* <h3>Login with Google</h3>
      <GoogleLogin
        clientId={CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        buttonText="Login"
      /> */}
    </div>
  );
};

export default LandingPage;
