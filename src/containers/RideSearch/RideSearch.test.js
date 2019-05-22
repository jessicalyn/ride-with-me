import React from 'react';
import { shallow } from 'enzyme';
import { RideSearch } from './RideSearch';

describe('RideSearch', () => {
  let wrapper
  const mockState = {
    start_location: "",
    end_location: "",
    start_date: ""
  }

  beforeEach(() => {
    wrapper = shallow(<RideSearch />)
  })

  it('should match the snapshot will all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have default state', () => {
    expect(wrapper.state()).toEqual(mockState)
  })
})