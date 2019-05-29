import React, { Component } from 'react';

export class RideRequest extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    console.log(this.props)
    return(
      <div className="containers">
        <h2>Ride Request</h2>
        <div>
          <label for="message">Write a message to DRIVER:</label>
          <textarea id="message" name="message"
                    rows="5" cols="33">
          It was a dark and stormy night...
          </textarea>
          <button>Send Request</button>
        </div>
      </div>
    )
  }
}