import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchResults } from '../../components/SearchResults/SearchResults';
// import fetchCities from '../../thunks/fetchCities';

export class RideSearch extends Component {
  constructor() {
    super();
    this.state = {
      start_location: "",
      end_location: "",
      start_date: ""
    }
  }

  displayCities = () => {
    return this.props.cities.map((city, index) => {
      let cityName = city.name
      return <option key={`option-${cityName}-${index}`} value={cityName} >{cityName}</option>
    })
  }
  
  render() {
    const { start_location, end_location } = this.state
    console.log("ridesearch render", this.props.cities)
    return(
      <div className="containers ride-search-container">
        <h3>Find a Ride</h3>
        <form className="search-form">
          <div className="search-divs">
            <label>Start Location</label>
            <select className="search-drop-down" value={start_location} name="search_start_location" onChange={this.handleChange}>
              <option value="0" disable="true" select="true" default>Select a City</option>
              {this.props.cities && this.displayCities()}
            </select>
          </div>
          <div className="search-divs">
            <label>End Location</label>
            <select className="search-drop-down" value={end_location} name="search_start_location" onChange={this.handleChange}>
              <option value="0" disable="true" select="true" default>Select a City</option>
            </select>
          </div>
          <div className="search-divs">
            <label>Start Date</label>
            <input></input>
          </div>
          <button>Search</button>
        </form>
        <SearchResults />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  cities: state.cities
})

export const mapDispatchToProps = (dispatch) => ({
  // fetchCities: () => dispatch(fetchCities())
})

export default connect(mapStateToProps, mapDispatchToProps)(RideSearch)