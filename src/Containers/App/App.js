import React from 'react';
import { RideSearch } from '../RideSearch/RideSearch';

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
      <RideSearch />
    </div>
  );
}

export default App;
