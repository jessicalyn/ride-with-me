import React, { Component } from 'react';

export class CreateRide extends Component {

  render() {
    return(
      <div className="create-ride-container">
        <h3>Create a Ride</h3>
        <form>
          <div>
            <label>Start City</label>
            <input type="text"></input>
          </div>
          <div>
            <label>End City</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Start Date</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Compensation</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Available Seats</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Short Description</label>
            <input type="text"></input>
          </div>
          <button>Add Ride</button>
        </form>
      </div>
    )
  }
}
