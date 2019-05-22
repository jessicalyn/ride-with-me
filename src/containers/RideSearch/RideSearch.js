import React, { Component } from 'react';
import { SearchResults } from '../../components/SearchResults/SearchResults';

export class RideSearch extends Component {
  constructor() {
    super();
    this.state = {
      start_location: "",
      end_location: "",
      start_date: ""
    }
  }
  
  render() {
    const { start_location, end_location } = this.state
    return(
      <div className="containers ride-search-container">
        <h3>Find a Ride</h3>
        <form className="search-form">
          <div className="search-divs">
            <label>Start Location</label>
            <select className="search-drop-down" value={start_location} name="search_start_location" onChange={this.handleChange}>
              <option value="0" disable="true" select="true" default>Select a City</option>
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
