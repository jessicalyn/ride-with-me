import React from 'react';

export const Welcome = () => {

  return (
    <div className="containers">
      <h2>Welcome to Ride With Me</h2>
      <h3>Ride With Me is your ridesharing app for long distance trips!</h3>
      <div className="how-to-container">
        <div className="rider-container">
          <h3>Looking for a Ride?</h3>
          <h4>Find a Ride</h4>
          <p>Choose your desired departure and arrival cities, and, optionally, your desired travel date. You will then see a list of available rides between those cities. Read their descriptions, see the price and pick a ride you'd like to join.</p>
          <h4>Request to Join a Ride</h4>
          <p>Click on "Request to Join" to send a message to the driver. Be friendly! They can either accept or deny your request.</p>
          <h4>Coordinate with Driver</h4>
          <p>Once your request has been accepted, you'll receive an email with your driver's contact information, so you can get in touch. Coordinate the pickup location, departure time and payment method.</p>
          <h4>Enjoy your ride!</h4>
        </div>
        <div className="driver-container">
          <h3>Offering a Ride?</h3>
          <h4>Create a Ride</h4>
          <p>Enter your start and end locations, departure date, available seats, requested compensation, and a short description for the ride.</p>
          <h4>Check your Requests</h4>
          <p>When a rider requests to join your ride you'll receive an email and see the request in My Requests. You can choose to Accept or Deny the rider's request.</p>
          <h4>Coordinate with Rider</h4>
          <p>If you accept a request, you'll receive an email with your rider's contact information, so you can get in touch. Coordinate the pickup location, departure time and payment method.</p>
          <h4>Enjoy your ride!</h4>
          <p>Mark the ride as completed in My Rides and complete payment with the rider.</p>
        </div>
      </div>
    </div>
  )
}