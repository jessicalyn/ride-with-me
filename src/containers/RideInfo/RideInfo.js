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
    console.log("uuid", uuid)
    const { driver } = this.props
    console.log("driver", driver)
    if (uuid === driver.uuid) {
      this.setState({ isDriver: true })
    }
  }

  render() {
    const { driver, endCity, startCity, status, ridepassengerSet } = this.props
    const ridePassengers = ridepassengerSet.map(passenger => {
      return <p>{passenger.firstName}</p>
    })
    return(
      <div className="containers ride-info-container">
        <h2>Ride Information</h2>
        <p>Your role: {this.state.isDriver? "DRIVER" : "RIDER" } </p>
        <p>Driver Name: {driver.firstName}</p>
        <p>{startCity.name} to {endCity.name}</p>
        <p>Ride Status: {status}</p>
        {ridePassengers && <p>Passenger List: {ridePassengers}</p>}
      </div>
    )
  }
}

// driver: {id: "2"}
// endCity: {id: "3"}
// id: "3"
// match: {path: "/rides/:id", url: "/rides/3", isExact: true, params: {…}}
// ridepassengerSet: []
// startCity: {id: "2"}
// status: "available"

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(RideInfo)