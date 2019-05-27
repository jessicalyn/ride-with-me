import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

export class Login extends Component {

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    return(
      <GoogleLogin
        clientId="716984648143-q0uo1263pr96hegug4iqlotqslidqu9p.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    )
  }
}