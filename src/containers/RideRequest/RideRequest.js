import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export class RideRequest extends Component {
  constructor() {
    super()
    this.state = {
      message: "I'd like to join your ride..."
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { message } = this.state
    const { rideId } = this.props
    const { uuid } = this.props.user
    const CREATE_REQUEST = gql`
      mutation ($message: String!, $passengerUuid: String!, $rideId: Int!) {
        createRequest(message: $message, passengerUuid: $passengerUuid, rideId: $rideId) {
          request {
            id
            message
            passenger { id }
            ride { id }
          }
        }
      }`
    return(
      <div className="containers">
        <h2>Ride Request</h2>
        <form>
          <label>Write a message to { this.props.driverName }:</label>
          <textarea 
            name="message" 
            value={ this.state.message }
            onChange={ this.handleChange }
            rows="5"
            cols="33">
          </textarea>
          <Mutation mutation={CREATE_REQUEST} variables={{ 
            "message": message,
            "passengerUuid": uuid,
            "rideId": rideId
          }}>
            {(createRequest, { data, loading, error }) => <button onClick={createRequest}>Send Request</button> }
          </Mutation>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(RideRequest)