import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../../actions';

export class Profile extends Component {

  logout = () => {
    console.log("logout user")
    this.props.logoutUser()
  }

  render() {
    const { firstName, lastName, email, imageUrl } = this.props.user
    return(
      <div className="containers ride-search-container">
        { !this.props.user && <Redirect to='/login' />}
          <h2>My Profile</h2>
          <h4>Name: {firstName} {lastName}</h4>
          <h4>Email: {email}</h4>
          <img src={imageUrl} alt="User's Google Profile"/>
          <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          >
          </GoogleLogout>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps)(Profile)