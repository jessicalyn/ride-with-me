import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { Loader } from '../../components/Loader/Loader';

export class RideSearch extends Component {
  constructor() {
    super();
    this.state = {
      start_location: "",
      end_location: "",
      start_date: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  displayCities = () => {
    return this.props.cities.map(city => {
      return <option key={`option-${city.name}-${city.id}`} value={city.id} >{city.name}</option>
    })
  }
  
  render() {
    const { start_location, end_location, start_date } = this.state
    return(
      <div className="containers ride-search-container">
        <h3>Find a Ride</h3>
        {this.props.cities?  
          <form className="search-form" onSubmit={this.handleSubmit}>
            <div className="search-divs">
              <label>Start Location</label>
              <select className="search-drop-down" value={start_location} name="start_location" onChange={this.handleChange}>
                <option value="0" disable="true" select="true" default>Select a City</option>
                {this.displayCities()}
              </select>
            </div>
            <div className="search-divs">
              <label>End Location</label>
              <select className="search-drop-down" value={end_location} name="end_location" onChange={this.handleChange}>
                <option value="0" disable="true" select="true" default>Select a City</option>
                {this.displayCities()}
              </select>
            </div>
            <div className="search-divs">
              <label>Start Date</label>
              <input type="date" value={start_date} name="start_date" onChange={this.handleChange}></input>
            </div>
            <button>Search</button>
          </form>
        : <Loader /> }
        <SearchResults />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  cities: state.cities
})

export default connect(mapStateToProps)(RideSearch)