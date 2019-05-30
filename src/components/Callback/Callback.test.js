import React from 'react';
import { shallow } from 'enzyme';
import { Callback } from './Callback';


describe('Callback', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Callback />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
