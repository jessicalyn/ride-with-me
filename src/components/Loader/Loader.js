import React from 'react';
import loading from '../../assets/loading.gif';

export const Loader = () => {
  return (
    <div className='loading-icon-wrapper'>
      <img
        className='loading-icon'
        src={loading}
        alt='loading icon, the options are loading'
      />
    </div>
  )
}