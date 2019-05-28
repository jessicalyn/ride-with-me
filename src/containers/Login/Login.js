import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      googleId: ""
    }
  }

  loginMutation = () => {
    const { firstName, lastName, email } = this.state
    const LOGIN_USER = gql`
      mutation($email: String!, $firstName: String!, $lastName: String!) {
        loginUser(email: $email, firstName: $firstName, lastName: $lastName) {
          user { id firstName lastName email uuid }
        }
      }`

    return <Mutation mutation={LOGIN_USER} variables={{ 
      "email": email,
      "firstName": firstName,
      "lastName": lastName
    }}>
      {(loginUser, { data, loading, error }) => console.log(data)}
    </Mutation>
  }

  loginUser = async (response) => {
    console.log(response)
    const { tokenId, profileObj } = response
    await this.setState({ firstName: profileObj.familyName, lastName: profileObj.givenName, email: profileObj.email, googleId: tokenId })
    this.loginMutation()
    //send backend endpoint response.tokenId and profileObj (givenName, familyName, email) to login user
  }

  tryAgain = (response) => {
    console.log("login didn't work")
  }

  render() {
    return(
      <div className="containers">
        <h2>Login</h2>
        <p>Signin with Google to Create an Account or Login</p>
        <GoogleLogin
          clientId="716984648143-q0uo1263pr96hegug4iqlotqslidqu9p.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.loginUser}
          onFailure={this.tryAgain}
          cookiePolicy={'single_host_origin'}
        />
        {this.loginMutation}
      </div>
    )
  }
}