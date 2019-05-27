import React from 'react';

export const SearchResults = ({ id, description, price, totalSeats, departureTime, driver, endCity, startCity, sendJoinRequest }) => {
  return(
    <div className="search-results-container" id={ id }>
      <h4>{ startCity.name } to { endCity.name }</h4>
      <h4>Start Date: { departureTime }</h4>
      <h4>{ totalSeats } Seats Available</h4>
      <h4>{ driver.firstName } is requesting ${ price } per seat</h4>
      <h4>{ description }</h4>
      <button onClick={(() => sendJoinRequest(id))}>Request to Join</button>
    </div>
  )
}