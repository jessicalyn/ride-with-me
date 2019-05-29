import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';

export class CreateRide extends Component {
  state = {
    driverId: 1,
    startCityId: 0,
    endCityId: 0,
    description: "",
    mileage: 0,
    price: 0,
    totalSeats: 0,
    departureTime: "" 
  }

  handleChange = (e) => {
    const { name, value } = e.target
    if (name === "price") {
      const priceNum = parseFloat(value)
      this.setState({ price: priceNum })
    } else {
      this.setState({ [name]: value })
    }
  }

  displayCities = () => {
    return this.props.cities.map(city => {
      return <option key={`create-${city.name}-${city.id}`} value={city.id} >{city.name}</option>
    })
  }

  //need to set state for mileage and driverId in method to pass in mutation variables


  render() {
    const { description, driverId, startCityId, endCityId, mileage, price, totalSeats, departureTime } = this.state
    const CREATE_RIDE = gql`
      mutation(
          $driverId: Int!,
          $startCityId: Int!,
          $endCityId: Int!,
          $description: String!,
          $mileage: Int!,
          $price: Float!,
          $totalSeats: Int!,
          $departureTime: Date!) {
        createRide(
          driverId: $driverId, 
          startCityId: $startCityId,
          endCityId: $endCityId,
          description: $description,
          mileage: $mileage,
          price: $price,
          totalSeats: $totalSeats,
          departureTime: $departureTime) {
      ride {
        id
      }
      }}`
    return (
      <div className="create-ride-container">
        <div>
          { !this.props.user && <Redirect to='/login' />}
          <h3>Create a Ride</h3>
          <form>
            <div>
              <label>Start City</label>
              <select className="search-drop-down" value={startCityId} name="startCityId" onChange={this.handleChange}>
                <option value="0" disable="true" select="true" default>Select a City</option>
                {this.displayCities()}
              </select>
            </div>
            <div>
              <label>End City</label>
              <select className="search-drop-down" value={endCityId} name="endCityId" onChange={this.handleChange}>
                <option value="0" disable="true" select="true" default>Select a City</option>
                {this.displayCities()}
              </select>
            </div>
            <div>
              <label>Start Date</label>
              <input className="mb2" type="date" name="departureTime" value={departureTime} onChange={this.handleChange} />
            </div>
            <div>
              <label>Compensation</label>
              <input className="mb2" type="number" name="price" value={price} onChange={this.handleChange} />
            </div>
            <div>
              <label>Available Seats</label>
              <input className="mb2" type="text" name="totalSeats" value={totalSeats} onChange={this.handleChange} />
            </div>
            <div>
              <label>Short Description</label>
              <input className="mb2" type="text" name="description" value={description} onChange={this.handleChange} />
              </div>
          </form>
        </div>
        <Mutation mutation={CREATE_RIDE} variables={{ 
          "description": description,
          "driverId":driverId,
          "startCityId": startCityId,
          "endCityId": endCityId,
          "mileage": mileage,
          "price": price,
          "totalSeats": totalSeats,
          "departureTime": departureTime
        }}>
          {(createRide, { data, loading, error }) => <button onClick={createRide}>Add Ride</button>}
        </Mutation>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  cities: state.cities
})

export default connect(mapStateToProps)(CreateRide)