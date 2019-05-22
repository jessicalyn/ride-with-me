import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from './SearchResults';

describe('SearchResults', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchResults />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})