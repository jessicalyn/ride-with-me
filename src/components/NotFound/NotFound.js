import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {

  return(
    <div className="containers">
      <h2>404: Page Not Found</h2>
      <Link to='/'>Return to Home</Link>
    </div>
  )
}