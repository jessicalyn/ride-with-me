import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import React from 'react';
import { shallow } from 'enzyme';
import { mutateLogin } from '../../thunks/mutateLogin';
import { loginUser } from '../../actions';

jest.mock('../../thunks/mutateLogin')
jest.mock('../../actions')

describe('Login Container', () => {
  describe('Login', () => {
    let wrapper

    const mockState = {
      firstName: "",
      lastName: "",
      email: "",
      googleId: "",
      imageUrl: ""
    }
    const mockUser = {id: 1, name: "Jessica"}
    let mockMutateLogin
    let mockLoginUser

    beforeEach(() => {
      mockMutateLogin = jest.fn()
      mockLoginUser = jest.fn()
      wrapper = shallow(
        <Login 
          user={mockUser}
          mutateLogin={mockMutateLogin}
          loginUser={mockLoginUser}
        />
      )
    })

    it('should match the snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot()
    })

    it('should have proper default state', () => {
      expect(wrapper.state()).toEqual(mockState)
    })

    it('should set state on googleLogin', () => {
      const mockResponse = {
        tokenId: 234314,
        profileObj: {
          familyName: "Hansen",
          givenName: "Hansen",
          email: "Hansen",
          imageUrl: "www.image.com"
        }
      }
      wrapper.instance().googleLogin(mockResponse)

      expect(wrapper.state()).toEqual({
        lastName: "Hansen",
        firstName: "Hansen",
        email: "Hansen",
        googleId: 234314,
        imageUrl: "www.image.com"
      })
    })

    it('should invoke userLogin when googleLogin is called', () => {
      const mockResponse = {
        tokenId: 234314,
        profileObj: {
          familyName: "Hansen",
          givenName: "Hansen",
          email: "Hansen",
          imageUrl: "www.image.com"
        }
      }
      const spy = jest.spyOn(wrapper.instance(), 'userLogin')

      wrapper.instance().googleLogin(mockResponse)

      expect(spy).toHaveBeenCalled()
    })

    it('should invoke mutateLogin when userLogin is called', () => {
      wrapper.instance().userLogin()

      expect(mockMutateLogin).toHaveBeenCalled()
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
    it('should dispatch mutateLogin with variables', () => {
      const mockVariables = {"email":"email","firstName":"firstName","lastName":"lastName","imageUrl":"imageUrl"}
      const mockDispatch = jest.fn()
      const actionToDispatch = mutateLogin(mockVariables)
      const mappedProps = mapDispatchToProps(mockDispatch)
  
      mappedProps.mutateLogin(mockVariables)
  
      expect(mockDispatch).toHaveBeenCalled(actionToDispatch)
    })

    it('should dispatch loginUser with user', () => {
      const mockUser = {id: 1, name: "Jessica"}
      const mockDispatch = jest.fn()
      const actionToDispatch = loginUser(mockUser)
      const mappedProps = mapDispatchToProps(mockDispatch)
      
      mappedProps.loginUser(mockUser)

      expect(mockDispatch).toHaveBeenCalled(actionToDispatch)      
    })
  })
  
})