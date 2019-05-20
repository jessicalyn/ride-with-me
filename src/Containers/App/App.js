import React from 'react';
import { Route, Link } from 'react-router-dom';
import { RideSearch } from '../RideSearch/RideSearch';
import { CreateRide } from '../CreateRide/CreateRide';
import { MyRides } from '../MyRides/MyRides';
import { Profile } from '../Profile/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/' className="home-button"><h1>Ride With Me</h1></Link>
        <div className="header-buttons">
          <Link to='/myrides' className="nav-buttons">My Rides</Link>
          <Link to='/profile' className="nav-buttons">Profile</Link>
        </div>
      </header>
      <Route exact path='/' component={ RideSearch } />
      <Route exact path='/' component={ CreateRide } />
      <Route path='/myrides' component={ MyRides } />
      <Route path='/profile' component={ Profile } />
    </div>
  );
}

export default App;
