import React, { Component } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export default class MyRides extends Component {
  constructor() {
    super();
    this.state = {
      isCancelled: true
    }
  }

  render() {
    return(
      <div className="my-rides-container">
        <h2>My Rides</h2>
        <Query
          query={gql`
            {
              availableRides { id description price totalSeats departureTime status
                driver { id firstName lastName }
                ridepassengerSet { passenger { id firstName lastName } }
                endCity { id name }
                startCity { id name }
              }
            }
          `}
        >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            
            return data.availableRides.map(({
              id, description, price, totalSeats, departureTime, status, driver, endCity, startCity }) => (
                <div key={id} className="ride-container">
                  <div className="first-line">
                    <p>{ startCity.name } to { endCity.name }</p>
                    <p>{ status.toUpperCase() }</p>
                  </div>
                  <div className="first-line">
                    <p>Departure Date: { departureTime }</p>
                    <p>Seats Available: { totalSeats }</p>
                  </div>
                  <p>Driver { driver.firstName } is requesting { price } per seat for this ride.</p>
                  <p>Ride Description: { description }</p>
                </div>
                ));
              }}
        </Query>
      </div>
    )
  }
}