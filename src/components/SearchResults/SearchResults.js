import React from 'react';

export const SearchResults = ({ id, description, price, totalSeats, departureDate, driver, endCity, startCity, sendJoinRequest }) => {
  return(
    <div className="search-results-container" id={ id }>
      <h4>{ startCity.name } to { endCity.name }</h4>
      <h4>Start Date: { departureDate }</h4>
      <h4>{ totalSeats } Seats Available</h4>
      <h4>{ driver.firstName } is requesting ${ price } per seat</h4>
      <h4>{ description }</h4>
      <button onClick={(() => sendJoinRequest(id, driver.firstName, driver.id))}>Request to Join</button>
    </div>
  )
}