import React from 'react';
import { Route } from 'react-router-dom';
import { RideSearch } from '../RideSearch/RideSearch';
import { CreateRide } from '../CreateRide/CreateRide';
import { MyRides } from '../MyRides/MyRides';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ride With Me</h1>
        <div className="header-buttons">
          <button>Messages</button>
          <button>My Rides</button>
          <button>Profile</button>
        </div>
      </header>
      <Route exact path='/' component={ RideSearch } />
      <Route exact path='/' component={ CreateRide } />
      <Route path='/myrides' component={ MyRides } />
    </div>
  );
}

export default App;
