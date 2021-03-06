import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

const MY_REQUESTS = gql`
    query ($driverUuid: String!) {
      pendingRequests(driverUuid: $driverUuid) {
        id
        ride { id departureDate availableSeats startCity { name } endCity { name } }
        passenger { id firstName lastName }
        message
        status
        createdAt
      }
    }
  `

const ADD_RIDER = gql`
  mutation($passengerId: Int! $rideId: Int!) {
    createRidePassenger(passengerId:$passengerId, rideId:$rideId){
      ok
      message
    }
  }
`

const REJECT_RIDER = gql`
  mutation($id: Int!, $status: String!) {
    changeRequestStatus(id:$id status:$status){
      request {
        id
        status
      }
    }
  }
`

export class MyRequests extends Component {

  render() {
    const driverUuid = this.props.user.uuid
    return(
      <div className="containers">
        <h2>My Requests</h2>
        { !this.props.user && <Redirect to='/login' /> }
        <Query
          query={MY_REQUESTS} variables={{ driverUuid }}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loader />
            if (error) return <p>{ error }</p>
            return data.pendingRequests.map(({ id, ride, passenger, message, status, createdAt }) => (
              <div key={id} className="containers requests-container">
                <h3>Request from { passenger.firstName }</h3>
                <h4>To join your ride on { ride.departureDate } from { ride.startCity.name } to {ride.endCity.name }</h4>
                <h4>Message: <p>{ message }</p></h4>
                <h4>There are { ride.availableSeats } seats available.</h4>
                <Mutation mutation={ADD_RIDER} variables={{ 
                  "passengerId": passenger.id,
                  "rideId": ride.id
                }}>
                  {(createRidePassenger, { data, loading, error }) => {
                    if (loading) return <Loader />
                    if (error) return <p>{ error }</p> 
                    if (!data) return <button className="standard-button green-button" onClick={createRidePassenger}>Add { passenger.firstName } to Ride</button>
                    if (data) return <h3>Rider Added!</h3>
                  }}
                </Mutation>
                <Mutation mutation={REJECT_RIDER} variables={{ 
                  "id": id,
                  "status": "rejected"
                }}>
                  {(changeRequestStatus, { data, loading, error }) => {
                    if (loading) return <Loader />
                    if (error) return <p>{ error }</p>
                    if (!data) return <button className="standard-button red-button" onClick={changeRequestStatus}>Reject { passenger.firstName }'s Request</button>
                    if (data) return <h3>Rider Rejected!</h3>
                  }}
                </Mutation>
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

export default connect(mapStateToProps)(MyRequests)