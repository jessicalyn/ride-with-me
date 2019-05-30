import { RideRequest, mapStateToProps } from './RideRequest';
import React from 'react';
import { shallow } from 'enzyme';

describe('RideRequest Container', () => {
  describe('RideRequest', () => {
    let wrapper
    
    const mockState = {
      message: "I'd like to join your ride..."
    }
    const mockUser = {id: 1, name: "Jessica"}

    beforeEach(() => {
      wrapper = shallow(
        <RideRequest 
          user={mockUser}
        />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot()
    })

    it('should have proper default state', () => {
      expect(wrapper.state()).toEqual(mockState)
    })

    it('should set state on handleChange', () => {
      const mockEvent = { target: { name: "message", value : "Going to the strawbale festival!" }}
      const updatedState = {
        message: "Going to the strawbale festival!"
      }
      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state()).toEqual(updatedState)
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