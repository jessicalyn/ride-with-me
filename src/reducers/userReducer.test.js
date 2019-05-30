import { userReducer } from './userReducer';
import * as actions from '../actions';

describe('userReducer', () => {
  const state = []

  it('should return state by default', () => {
    const action = {}

    const result = userReducer(state, action)

    expect(result).toEqual(state)
  })

  it('should return state as a user', () => {
    const mockUser = {id: 1, firstName: "Jessica", lastName: "Hansen"}
    const action = actions.loginUser(mockUser)

    const result = userReducer(state, action)

    expect(result).toEqual(mockUser)
  })

  it('should return state as a user', () => {
    const mockUser = ""
    const action = actions.logoutUser(mockUser)

    const result = userReducer(state, action)

    expect(result).toEqual(mockUser)
  })
})