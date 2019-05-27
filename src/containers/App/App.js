import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import RideSearch from '../RideSearch/RideSearch';
import CreateRide from '../CreateRide/CreateRide';
import MyRides from '../MyRides/MyRides';
import { Profile } from '../Profile/Profile';
import { fetchCities } from '../../thunks/fetchCities';

export class App extends Component {

  componentDidMount() {
    this.props.fetchCities()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/' className="home-button"><h1>Ride With Me</h1></Link>
          <div className="header-buttons">
            <Link to='/newride' className="nav-buttons">Create a Ride</Link>
            <Link to='/myrides' className="nav-buttons">My Rides</Link>
            <Link to='/profile' className="nav-buttons">Profile</Link>
          </div>
        </header>
        <Route exact path='/' component={ RideSearch } />
        <Route exact path='/newride' component={ CreateRide } />
        <Route path='/myrides' component={ MyRides } />
        <Route path='/profile' component={ Profile } />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => dispatch(fetchCities())
})

export default connect(null, mapDispatchToProps)(App)