import { Profile, mapStateToProps, mapDispatchToProps } from './Profile';
import React from 'react';
import { shallow } from 'enzyme';
import { logoutUser } from '../../actions';

jest.mock('../../actions')

describe('Profile Container', () => {
  describe('Profile', () => {
    let wrapper
    const mockUser = {id: 1, name: "Jessica"}
    let mockLogoutUser

    beforeEach(() => {
      mockLogoutUser = jest.fn()
      wrapper = shallow(
        <Profile 
          user={mockUser}
          logoutUser={mockLogoutUser}
        />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot()
    })

    it('should invoke logoutUser when logout is called', () => {
      wrapper.instance().logout()

      expect(mockLogoutUser).toHaveBeenCalled()
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

  describe('mapDispatchToProps', () => {
    it('should dispatch logoutUser', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = logoutUser()
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.logoutUser()
  
      expect(mockDispatch).toHaveBeenCalled(actionToDispatch)
    })
  })
  
})