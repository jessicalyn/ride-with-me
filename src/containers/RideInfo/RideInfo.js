import React, { Component } from 'react';

export class RideInfo extends Component {
  constructor() {
    super();
    this.state = {
      isCancelled: false
    }
  }

  render() {
    return(
      <div className="containers ride-info-container">
        <h2>This Ride</h2>
      </div>
    )
  }
}