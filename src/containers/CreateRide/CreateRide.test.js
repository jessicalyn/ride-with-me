import React from 'react';
import { shallow } from 'enzyme';
import { CreateRide } from './CreateRide';

describe('CreateRide', () => {

  describe('CreateRide container', () => {
    let wrapper
    const mockDescription = "Going to visit Grandma"
    const mockUUID = "1320498-2349-3049"
    const mockStartCityId = 5
    const mockEndCityId = 4
    const mockPrice = 200
    const mockTotalSeats = 5
    const mockDepartureDate = "2019-05-14"
    const mockUser = { id: 2, uuid: "1320498-2349-3032432449" }
    const mockCities = [{ id: 1, name: "Denver"}, { id: 2, name: "San Diego"}]
    const mockState = {
      driverUuid: "1320498-2349-3032432449",
      startCityId: 1,
      endCityId: 2,
      description: "Going to Grandmas",
      price: "$300",
      totalSeats: 3,
      departureDate: "2019-05-14" 
    }
    
    beforeEach(() => {
      wrapper = shallow(
        <CreateRide
          description={mockDescription}
          driverUuid={mockUUID}
          startCityId={mockStartCityId}
          endCityId={mockEndCityId}
          price={mockPrice}
          totalSeats={mockTotalSeats}
          departureDate={mockDepartureDate}
          user={mockUser}
          cities={mockCities}
        />)
    })
    
    it('should match the snapshot with all data passed in', () => {
      expect(wrapper).toMatchSnapshot()
    })
  
    it.skip('should have proper default state', () => {
      expect(wrapper.state()).toEqual(mockState)
    })
  })
})