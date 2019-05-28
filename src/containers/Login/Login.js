import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

export class Login extends Component {

  responseGoogle = (response) => {
    console.log(response)
    console.log(response.tokenId)
    //send backend endpoint response.tokenId and profileObj (givenName, familyName, email) to login user
  }

  logout = () => {
    console.log("logout user")
    //erase user info in redux
  }

  render() {
    return(
      <div>
        <GoogleLogin
        clientId="716984648143-q0uo1263pr96hegug4iqlotqslidqu9p.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
        />
        <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={this.logout}
        >
        </GoogleLogout>
      </div>
    )
  }
}