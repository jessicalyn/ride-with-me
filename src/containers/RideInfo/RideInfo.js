import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const { driver, endCity, startCity, status, ridepassengerSet } = this.props
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
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(RideInfo)