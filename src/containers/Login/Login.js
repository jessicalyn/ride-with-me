import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { mutateLogin } from '../../thunks/mutateLogin';

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

  googleLogin = async (response) => {
    const { firstName, lastName, email } = this.state
    console.log(response)
    const { tokenId, profileObj } = response
    await this.setState({ firstName: profileObj.familyName, lastName: profileObj.givenName, email: profileObj.email, googleId: tokenId })
    const variables = `{"email":${email},"firstName":${firstName},"lastName":${lastName}}`
    this.props.mutateLogin(variables)
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
          onSuccess={this.googleLogin}
          onFailure={this.tryAgain}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  mutateLogin: (variables) => dispatch(mutateLogin(variables))
})

export default connect(null, mapDispatchToProps)(Login)