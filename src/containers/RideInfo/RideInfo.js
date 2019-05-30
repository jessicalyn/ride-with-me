import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { connect } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';

const DELETE_RIDER = gql`
  mutation($passengerUuid: String! $rideId: Int!){
    deleteRidePassenger(passengerUuid:$passengerUuid, rideId:$rideId){
      ok
      message
    }
  }
`

const COMPLETE_RIDE = gql`
  mutation ($id: Int!, $status: String!) {
    changeRideStatus(id: $id, status: $status) {
      ride { id status }
    }
  }
`

export class RideInfo extends Component {
  constructor() {
    super();
    this.state = {
      isDriver: false
    }
  }

  componentDidMount() {
    console.log(this.props)
    const { uuid } = this.props.user
    const { driver } = this.props
    if (uuid === driver.uuid) {
      this.setState({ isDriver: true })
    }
  }

  render() {
    const { id, availableSeats, price, description, driver, endCity, startCity, status, ridepassengerSet, user } = this.props
    const passengerUuid = user.uuid
    const ridePassengers = ridepassengerSet.map((passenger, index) => {
      return <p key={index}>{passenger.passenger.firstName}</p>
    })
    return(
      <div className="containers ride-info-container">
        <h2>Ride Information</h2>
        <p>Your role: {this.state.isDriver? "DRIVER" : "RIDER" } </p>
        <p>Driver Name: {driver.firstName}</p>
        <p>{startCity.name} to {endCity.name}</p>
        <p>Ride Status: {status}</p>
        <p>Seats Available: { availableSeats }</p>
        <p>Ride Description: { description }</p>
        <p>Driver { driver.firstName } is requesting { price } per seat for this ride.</p>
        {ridePassengers && <div>Passenger List: {ridePassengers}</div>}
        <Mutation mutation={DELETE_RIDER} variables={{ 
          "passengerUuid": passengerUuid,
          "rideId": id
        }}>
          {(deleteRidePassenger, { data, loading, error }) => {
            if (loading) return <Loader />
            if (error) return <div>HAYYYYYY: { error }</div>
            if (!data) return <button onClick={deleteRidePassenger}>Cancel Ride</button>
            if (data) return <h3>Ride Cancelled!</h3>
          }}
        </Mutation>
        { this.state.isDriver &&
          <Mutation mutation={COMPLETE_RIDE} variables={{ 
            "id": id,
            "status": "completed"
          }}>
            {(changeRideStatus, { data, loading, error }) => {
              if (loading) return <Loader />
              if (error) return <div>THIS ERRIOR: { error }</div>
              if (!data) return <button onClick={changeRideStatus}>Ride Completed</button>
              if (data) return <h3>Ride Completed!</h3>
            }}
          </Mutation>
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(RideInfo)