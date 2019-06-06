import React from 'react';

export const SearchResults = ({ id, description, price, totalSeats, departureDate, driver, endCity, startCity, sendJoinRequest }) => {
  return(
    <div className="search-results-container" id={ id }>
      <h3>{ startCity.name } to { endCity.name }</h3>
      <div className="details-container">
        <div className="info-container">
          <h4>Start Date: { departureDate }</h4>
          <h4>{ totalSeats } Seats Available</h4>
          <h4>{ driver.firstName } is requesting ${ price } per seat</h4>
          <h4>{ description }</h4>
        </div>
        <div className="image-container">
          <img src={`https://maps.googleapis.com/maps/api/staticmap?size=225x175&markers=color:green%7Clabel:1%7C${startCity.name}&markers=color:red|label:2|${endCity.name}&key=AIzaSyC1l-GGLlVWnXFaybX2DaJr4bS4ANmAWMo`} alt="map" />
        </div>
      </div>
      <button className="standard-button" onClick={(() => sendJoinRequest(id, driver.firstName, driver.id))}>Request to Join</button>
    </div>
  )
}