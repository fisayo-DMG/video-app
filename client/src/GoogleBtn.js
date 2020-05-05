import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "708483733729-napcqivj73qrqm83b2akhu3dmq26h9bj.apps.googleusercontent.com";

class GoogleBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoggedIn: false,
      accessToken: "",
    };
  }

  login = (response) => {
    console.log(response)
    if (response.code) {
      this.setState({
        LoggedIn: true,
        accessToken: response.code
      });
    }
  };

  logout = () => {
    this.setState({
      LoggedIn: false,
      accessToken: "",
    });
  };

  handleLoginFaliure = (response) => {
    alert("Failed to Log in");
  };

  handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };

  render() {
    return (
      <div>
        {this.state.LoggedIn ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          />
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFaliure}
            cookiePolicy={"single_host_origin"}
            responseType='code'
          />
        )}
        {this.state.accessToken ? <h5>Your Access Token: <br></br> {this.state.accessToken} </h5> : null}
      </div>
    );
  }
}

export default GoogleBtn;
