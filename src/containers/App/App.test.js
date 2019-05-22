import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';

jest.mock('../../thunks/fetchCities')

describe('App', () => {
  describe('App', () => {
    let wrapper
    let mockFetchCities
    const mockCities = ["Denver", "San Diego", "Boston"]

    beforeEach(() => {
      mockFetchCities = jest.fn().mockImplementation(() => Promise.resolve({ mockCities }))
      wrapper = shallow(<App fetchCities={mockFetchCities} />)
    })

    it('should match the snapshot with all data passed in', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should invoke fetchCities on componentDidMount', () => {
      wrapper.instance().componentDidMount()

      expect(mockFetchCities).toHaveBeenCalled()
    })
  });

  describe('mapDispatchToProps', () => {
    it('should dispatch fetchCities', () => {
      const mockDispatch = jest.fn()
      const fetchCities = jest.fn()
      const actionToDispatch = fetchCities('www.webuiltthiscity.com')
      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.fetchCities('www.webuiltthiscity.com')

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  });
})