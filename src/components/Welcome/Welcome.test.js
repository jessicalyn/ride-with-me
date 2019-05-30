import React from 'react';
import { shallow } from 'enzyme';
import { Welcome } from './Welcome';


describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})
