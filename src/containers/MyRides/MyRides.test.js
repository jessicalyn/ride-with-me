import React from 'react';
import { shallow } from 'enzyme';
import { MyRides } from './MyRides';

describe('MyRides', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MyRides />)
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})