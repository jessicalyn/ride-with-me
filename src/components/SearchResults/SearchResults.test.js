import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from './SearchResults';

describe('SearchResults', () => {
  let wrapper
  const mockId = 1
  const mockStartCity = { id: 5, name: "Denver" }
  const mockEndCity = { id: 4, name: "San Francisco" }
  const mockDepartureTime = "2019-05-14"
  const mockTotalSeats = 5
  const mockDriver = { id: 1, firstName: "Jessica"}
  const mockPrice = 200
  const mockDescription = "Going to visit Grandma"
  const mockSendJoinRequest = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <SearchResults
        id={mockId}
        startCity={mockStartCity}
        endCity={mockEndCity}
        departureTime={mockDepartureTime}
        totalSeats={mockTotalSeats}
        driver={mockDriver}
        price={mockPrice}
        description={mockDescription}
        sendJoinRequest={mockSendJoinRequest}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})