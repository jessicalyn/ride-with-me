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
    const { uuid } = this.props.user
    const { driver } = this.props
    if (uuid === driver.uuid) {
      this.setState({ isDriver: true })
    }
  }

  render() {
    const { id, availableSeats, price, description, departureDate, driver, endCity, startCity, status, ridepassengerSet, user } = this.props
    const passengerUuid = user.uuid
    const date = new Date(departureDate).toLocaleDateString()
    const ridePassengers = ridepassengerSet.map((passenger, index) => {
      return <p key={index}>{passenger.passenger.firstName}</p>
    })
    return(
      <div className="containers">
        <h2>Ride Information</h2>
        <div>
          <h4>{startCity.name} to {endCity.name} on { date }</h4>
        </div>
        <p><span className="bold">Your role:</span> {this.state.isDriver? "Driver" : "Rider" }</p>
        <p><span className="bold">Ride Status:</span> {status}</p>
        <p><span className="bold">Seats Available:</span> { availableSeats }</p>
        <p>{ driver.firstName } is requesting ${ price } per seat for this ride.</p>
        <p><span className="bold">Ride Description:</span> { description }</p>
        {ridePassengers.length > 0 && <div className="passenger-list" ><span className="bold">Passenger List:</span> {ridePassengers}</div>}
        <Mutation mutation={DELETE_RIDER} variables={{ 
          "passengerUuid": passengerUuid,
          "rideId": id
        }}>
        {(deleteRidePassenger, { data, loading, error }) => {
          if (loading) return <Loader />
          if (error) return <div>{ error }</div>
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
            if (error) return <div>{ error }</div>
            if (!data) return <button className="green-button" onClick={changeRideStatus}>Ride Completed</button>
            if (data) return <h3>Ride Completed!</h3>
          }}
          </Mutation>
        }
        <div>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x350&markers=color:green%7Clabel:1%7C${startCity.name}&markers=color:red|label:2|${endCity.name}&key=AIzaSyC1l-GGLlVWnXFaybX2DaJr4bS4ANmAWMo`} alt="map" />
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(RideInfo)