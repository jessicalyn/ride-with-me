import React from 'react';
import { Route } from 'react-router-dom';
import { RideSearch } from '../RideSearch/RideSearch';
import { CreateRide } from '../CreateRide/CreateRide';

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
      <Route path='/' component={ RideSearch } />
      <Route path='/' component={ CreateRide } />
    </div>
  );
}

export default App;
