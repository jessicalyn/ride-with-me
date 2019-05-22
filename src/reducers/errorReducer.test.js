import { errorReducer } from './errorReducer';
import * as actions from '../actions';

describe('errorReducer', () => {
  const mockState = ""

  it('should return state by default', () => {
    const action = {}

    const result = errorReducer(mockState, action)

    expect(result).toEqual(mockState)
  })

  it('should return state as message string', () => {
    const mockError = "Something went wrong"
    const action = actions.hasError(mockError)

    const result = errorReducer(mockState, action)

    expect(result).toEqual(mockError)
  })
})