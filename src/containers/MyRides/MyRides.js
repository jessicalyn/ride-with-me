import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link, Redirect } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

export class MyRides extends Component {
  
  render() {
    const userUuid = this.props.user.uuid
    const MY_RIDES = gql`
      query ($userUuid: String!){
        myRides(userUuid: $userUuid) {
          id
          description
          price
          availableSeats
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
        { !this.props.user && <Redirect to='/login' /> }
        <h2>My Rides</h2>
        <Query query={MY_RIDES} variables={{ userUuid }} >
          {({ loading, error, data }) => {
            if (loading) return <Loader />
            if (error) return <p>{ error }</p>
            return data.myRides.map(({ id, departureDate, endCity, startCity }) => (
              <div key={id} className="ride-container">
                <p>{ startCity.name } to { endCity.name }</p>
                <p>Departure Date: { departureDate }</p>
                <Link to={`/rides/${id}`} myrides={ data.myRides } key={id}>See Ride Info</Link>
              </div>
              ))
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