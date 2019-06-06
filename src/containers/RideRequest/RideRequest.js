import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Loader } from '../../components/Loader/Loader';

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
          <h3>Write a message to { this.props.driverName }:</h3>
          <textarea 
            name="message" 
            value={ this.state.message }
            onChange={ this.handleChange }
            rows="5"
            cols="33">
          </textarea>
          <Mutation mutation={CREATE_REQUEST} >
            {(createRequest, { data, loading, error }) => {
              if (loading) return <Loader />
              if (error) return <p>{ error }</p>
              if (!data) return <button className="standard-button request-button" onClick={(e) => {
                e.preventDefault()
                createRequest({ variables: {
                  "message": message,
                  "passengerUuid": uuid,
                  "rideId": rideId
                }})
              }}>Send Request</button>
              if (data) return <h3>Request Sent!</h3>
            }}
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