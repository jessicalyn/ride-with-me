import React from 'react';
import { shallow } from 'enzyme';
import { CreateRide } from './CreateRide';

describe('CreateRide', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<CreateRide />)
  })
  
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})