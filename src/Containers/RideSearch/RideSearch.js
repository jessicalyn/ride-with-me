import React, { Component } from 'react';
import { SearchResults } from '../../components/SearchResults/SearchResults';

export class RideSearch extends Component {
  
  render() {
    return(
      <div className="containers ride-search-container">
        <h3>Find a Ride</h3>
        <SearchResults />
      </div>
    )
  }
}