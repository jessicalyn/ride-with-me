import { RideInfo, mapStateToProps } from './RideInfo';
import React from 'react';
import { shallow } from 'enzyme';

describe('RideInfo Container', () => {
  describe('RideInfo', () => {
    let wrapper
    const mockId = 0
    const mockAvailableSeats = 2
    const mockPrice = 100
    const mockDescription = "Over the river and through the woods"
    const mockMileage = 1000
    const mockTravelTime = 34
    const mockDepartureDate = "2019-05-14"
    const mockDriver = {id: 1, firstName: "Jessica"}
    const mockEndCity = {id: 1, name: "Denver"}
    const mockStartCity = {id: 2, name: "Golden"}
    const mockStatus = "available"
    const mockRidepassengerSet = {passenger: {id: 1, name: "Archie"}}

    const mockState = {
      isDriver: false
    }
    const mockUser = {id: 1, name: "Jessica"}

    beforeEach(() => {
      wrapper = shallow(
        <RideInfo 
          user={mockUser}
          id={mockId}
          availableSeats={mockAvailableSeats}
          price={mockPrice}
          description={mockDescription}
          mileage={mockMileage}
          travelTime={mockTravelTime}
          departureDate={mockDepartureDate}
          driver={mockDriver}
          endCity={mockEndCity}
          startCity={mockStartCity}
          status={mockStatus}
          ridepassengerSet={mockRidepassengerSet}
        />
      )
    })

    it.skip('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it.skip('should have proper default state', () => {
      expect(wrapper.state()).toEqual(mockState)
    })

    it.skip('should set state on componentDidMount', () => {
      const uuid = "0394830298438"
      const driver = {uuid: "0394830298438"}
      wrapper.instance().componentDidMount()

      expect(wrapper.state()).toEqual({
        isDriver: true
      })
    })

  })

  describe('mapStateToProps', () => {
    it('should return the expected props to state', () => {

      const mockState = {
        user: {id: 1, name: "Jessica"},
        fakeState: "Not real state to return"
      }
      const expected = {
        user: {id: 1, name: "Jessica"}
      }
  
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})