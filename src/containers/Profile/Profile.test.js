import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from './Profile';

describe('Profile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Profile />)
  })

  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  })
})