import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';

jest.mock('../../thunks/fetchCities')
jest.mock('../../thunks/fetchRideInfo')

describe('App', () => {
  describe('App', () => {
    let wrapper
    let mockFetchCities
    let mockFetchRideInfo
    const mockCities = ["Denver", "San Diego", "Boston"]
    const mockRideInfo = [{id: 1, startCity: {name: "Denver"}}, {id: 2, startCity: {name: "Boston"}}]

    beforeEach(() => {
      mockFetchRideInfo = jest.fn().mockImplementation(() => Promise.resolve({ mockRideInfo }))
      mockFetchCities = jest.fn().mockImplementation(() => Promise.resolve({ mockCities }))
      wrapper = shallow(<App 
        fetchCities={mockFetchCities}
        fetchRideInfo={mockFetchRideInfo}
      />)
    })

    it('should match the snapshot with all data passed in', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should invoke fetchCities on componentDidMount', () => {
      wrapper.instance().componentDidMount()

      expect(mockFetchCities).toHaveBeenCalled()
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