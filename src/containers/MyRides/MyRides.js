import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link, Redirect } from 'react-router-dom';

export class MyRides extends Component {
  constructor() {
    super();
    this.state = {
      isCancelled: true
    }
  }

  render() {
    const { uuid } = this.props.user
    const userUuid = uuid
    console.log(userUuid)
    const MY_RIDES = gql`
        query ($userUuid: String!){
          myRides(userUuid: $userUuid) {
            id
            description
            price
            totalSeats
            departureDate
            status
            driver { id uuid firstName lastName }
            ridepassengerSet {
              passenger { id firstName lastName }
            }
            endCity { id name }
            startCity { id name }
          }
        }
    `
    return(
      <div className="my-rides-container">
        { !this.props.user && <Redirect to='/login' />}
        <h2>My Rides</h2>
        <Query
          query={MY_RIDES} variables={{ userUuid }}
        >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
            
            return data.myRides.map(({
              id, description, price, totalSeats, departureDate, status, driver, endCity, startCity }) => (
                <div key={id} className="ride-container">
                  <div className="first-line">
                    <p>{ startCity.name } to { endCity.name }</p>
                    <p>{ status.toUpperCase() }</p>
                  </div>
                  <div className="first-line">
                    <p>Departure Date: { departureDate }</p>
                    <p>Seats Available: { totalSeats }</p>
                  </div>
                  <p>Driver { driver.firstName } is requesting { price } per seat for this ride.</p>
                  <p>Ride Description: { description }</p>
                  <p>{id}</p>
                  <Link to={`/rides/${id}`} key={id}>See Ride Info</Link>
                </div>
                ));
              }}
        </Query>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(MyRides)