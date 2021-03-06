import { MyRides, mapStateToProps } from './MyRides';
import React from 'react';
import { shallow } from 'enzyme';

describe('MyRides Container', () => {
  describe('MyRides', () => {
    let wrapper
    const mockUser = {id: 1, name: "Jessica"}

    beforeEach(() => {
      wrapper = shallow(
        <MyRides 
          user={mockUser}
        />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot()
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