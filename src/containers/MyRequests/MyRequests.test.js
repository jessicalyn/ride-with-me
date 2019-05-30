import { MyRequests, mapStateToProps } from './MyRequests';
import React from 'react';
import { shallow } from 'enzyme';

describe('MyRequests Container', () => {
  describe('MyRequests', () => {
    let wrapper
    const mockUser = {id: 1, name: "Jessica"}

    beforeEach(() => {
      wrapper = shallow(
        <MyRequests 
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