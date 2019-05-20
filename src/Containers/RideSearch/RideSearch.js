import React, { Component } from 'react';
import { SearchResults } from '../../components/SearchResults/SearchResults';

export class RideSearch extends Component {
  
  render() {
    return(
      <div className="containers ride-search-container">
        <h3>Find a Ride</h3>
        <form className="search-form">
          <div className="search-divs">
            <label>Start Location</label>
            <input></input>
          </div>
          <div className="search-divs">
            <label>End Location</label>
            <input></input>
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