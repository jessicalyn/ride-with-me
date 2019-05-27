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
        <h3>My Rides</h3>
        <Query
          query={gql`
            {
              availableRides { id description mileage price totalSeats departureTime status
                driver { id firstName lastName }
                ridepassengerSet {
                  passenger { id firstName lastName }
                }
                endCity { id name
                }
                startCity { id name
                }
              }
            }
          `}
        >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            
            return data.availableRides.map(({
              id, description, mileage, price, totalSeats, departureTime, status, driver }) => (
                <div key={id} className="ride-container">
                  <p>{ id }</p>
                  <p>{ description }</p>
                  <p>{ mileage }</p>
                  <p>{ price }</p>
                  <p>{ totalSeats }</p>
                  <p>{ departureTime }</p>
                  <p>{ status }</p>
                  <p>{ driver }</p>
                </div>
                ));
              }}
        </Query>
      </div>
    )
  }
}