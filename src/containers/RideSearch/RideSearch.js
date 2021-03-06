import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { fetchRideSearch } from '../../thunks/fetchRideSearch';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import RideRequest from '../RideRequest/RideRequest';

export class RideSearch extends Component {
  constructor() {
    super();
    this.state = {
      start_location: "",
      end_location: "",
      start_date: "",
      request: false,
      id: 0,
      driverName: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    let queryVariables
    const { start_location, end_location, start_date } = this.state
    e.preventDefault()
    if(start_date) {
      queryVariables = `{searchRidesByCities(startCityId:${start_location}, endCityId: ${end_location}, departureDate: \"${start_date}\"){ id description mileage price totalSeats departureDate status driver { id firstName lastName } endCity { id name } startCity { id name }}}`
    } else {
      queryVariables = `{searchRidesByCities(startCityId:${start_location}, endCityId: ${end_location}){ id description mileage price totalSeats departureDate status driver { id firstName lastName } endCity { id name } startCity { id name }}}`
    }
    this.props.fetchRideSearch(queryVariables)
  }

  displayCities = () => {
    return this.props.cities.map(city => {
      return <option className="drop-down" key={`option-${city.name}-${city.id}`} value={city.id} >{city.name}</option>
    })
  }

  sendJoinRequest = (id, driverName) => {
    this.setState({ request: true, id, driverName })
  }
  
  render() {
    const { start_location, end_location, start_date, request, id, driverName } = this.state
    const { searchResults } = this.props
    let ridesToDisplay
    
    if(searchResults) {
      ridesToDisplay = searchResults.map(ride => {
        return <SearchResults key={ride.id} {...ride} sendJoinRequest={this.sendJoinRequest} /> })
      }

    if(request) return <RideRequest rideId={id} driverName={driverName} />
      
    return(
      <div className="containers ride-search-container">
        <h3>Find a Ride</h3>
        { !this.props.user && <Redirect to='/login' />}
        {this.props.cities?  
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="search-divs">
              <label>Start City</label>
              <select className="search-drop-down" value={start_location} name="start_location" onChange={this.handleChange}>
                <option value="0" disable="true" select="true" default>Select a City</option>
                {this.displayCities()}
              </select>
            </div>
            <div className="search-divs">
              <label>End City</label>
              <select className="search-drop-down" value={end_location} name="end_location" onChange={this.handleChange}>
                <option value="0" disable="true" select="true" default>Select a City</option>
                {this.displayCities()}
              </select>
            </div>
            <div className="search-divs">
              <label>Start Date</label>
              <input type="date" value={start_date} name="start_date" onChange={this.handleChange}></input>
            </div>
            <div className="search-divs">
              <button className="standard-button search-button">Search</button>
            </div>
          </form>
        : <Loader /> }
        { this.props.isLoading && <Loader /> }
        { ridesToDisplay }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  cities: state.cities,
  searchResults: state.searchResults,
  isLoading: state.isLoading,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  fetchRideSearch: (queryVariables) => dispatch(fetchRideSearch(queryVariables)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RideSearch)