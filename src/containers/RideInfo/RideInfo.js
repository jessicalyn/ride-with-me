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

export class RideInfo extends Component {
  constructor({ driver, ridepassengerSet }) {
    super();
    this.state = {
      isCancelled: false,
      isDriver: false
    }
  }

  componentDidMount() {
    const { uuid } = this.props.user
    const { driver } = this.props
    if (uuid === driver.uuid) {
      this.setState({ isDriver: true })
    }
  }

  render() {
    console.log(this.props)
    const { id, driver, endCity, startCity, status, ridepassengerSet, user } = this.props
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
        {ridePassengers && <div>Passenger List: {ridePassengers}</div>}
        <Mutation mutation={DELETE_RIDER} variables={{ 
          "passengerUuid": passengerUuid,
          "rideId": id
        }}>
          {(deleteRidePassenger, { data, loading, error }) => {
            if (loading) return <Loader />
            if (error) return <div>Error: { error }</div>
            if (!data) return <button onClick={deleteRidePassenger}>Cancel Ride</button>
            if (data) return <h3>Ride Cancelled!</h3>
          }
        }
        </Mutation>
        
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(RideInfo)