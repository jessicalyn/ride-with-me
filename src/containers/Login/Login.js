import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { mutateLogin } from '../../thunks/mutateLogin';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../../actions';

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

  googleLogin = (response) => {
    console.log(response)
    const { tokenId, profileObj } = response
    this.setState({ firstName: profileObj.familyName, lastName: profileObj.givenName, email: profileObj.email, googleId: tokenId })
    this.userLogin()
  }
  
  userLogin = () => {
    const { firstName, lastName, email } = this.state
    const variables = `{"email":"${email}","firstName":"${firstName}","lastName":"${lastName}"}`
    this.props.mutateLogin(variables)
  }

  tryAgain = (response) => {
    console.log("DELETE THE FAKE USER")
    const user = { 
      email: "jessicalynhansen@gmail.com", 
      firstName: "Hansen",
      id: "12",
      lastName: "Jessica",
      uuid: "a710eedc-819c-11e9-8f08-5a5d1f8d1912" 
    }
    this.props.loginUser(user)
    console.log("google login didn't work")
  }

  render() {
    return(
      <div className="containers">
        <h2>Please Login to Continue</h2>
        <p>Signin with Google to Create an Account or Login</p>
        <GoogleLogin
          clientId="716984648143-q0uo1263pr96hegug4iqlotqslidqu9p.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.googleLogin}
          onFailure={this.tryAgain}
          cookiePolicy={'single_host_origin'}
        />
        { this.props.user && <Redirect to='/' /> }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  mutateLogin: (variables) => dispatch(mutateLogin(variables)),
  loginUser: (user) => dispatch(loginUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)