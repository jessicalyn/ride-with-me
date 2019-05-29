import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Redirect } from 'react-router-dom';

export class Profile extends Component {

  logout = () => {
    console.log("logout user")
    //erase user info in redux
  }

  render() {
    return(
      <div className="containers ride-search-container">
        { !this.props.user && <Redirect to='/login' />}
        <h2>My Profile</h2>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Phone</h4>
        <h4>Password</h4>
        <h4>Add Image Upload?</h4>
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        >
        </GoogleLogout>
      </div>
    )
  }
}
