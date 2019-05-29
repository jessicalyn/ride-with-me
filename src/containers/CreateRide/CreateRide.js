import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';

export class CreateRide extends Component {
  state = {
    driverUuid: this.props.user.uuid,
    startCityId: 0,
    endCityId: 0,
    description: "",
    price: 0,
    totalSeats: 0,
    departureDate: "" 
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

  render() {
    const { description, driverUuid, startCityId, endCityId, price, totalSeats, departureDate } = this.state
    const CREATE_RIDE = gql`
      mutation(
          $driverUuid: String!,
          $startCityId: Int!,
          $endCityId: Int!,
          $description: String!,
          $price: Float!,
          $totalSeats: Int!,
          $departureDate: Date!) {
        createRide(
          driverUuid: $driverUuid, 
          startCityId: $startCityId,
          endCityId: $endCityId,
          description: $description,
          price: $price,
          totalSeats: $totalSeats,
          departureDate: $departureDate) {
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
              <input className="mb2" type="date" name="departureDate" value={departureDate} onChange={this.handleChange} />
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
          "driverUuid":driverUuid,
          "startCityId": startCityId,
          "endCityId": endCityId,
          "price": price,
          "totalSeats": totalSeats,
          "departureDate": departureDate
        }}>
          {(createRide, { data, loading, error }) => {
            if (loading) return <Loader />
            if (error) return <p>Error :(</p> 
            if (!data) return <button onClick={createRide}>Add Ride</button>
            if (data) return <h3>Ride Created!</h3>
          }
        }
        </Mutation>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  cities: state.cities
})

export default connect(mapStateToProps)(CreateRide)