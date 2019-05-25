import { loadingReducer } from './loadingReducer';
import * as actions from '../actions';

describe('loadingReducer', () => {
  const mockState = false

  it('should return state by default', () => {
    const action = {}

    const result = loadingReducer(mockState, action)

    expect(result).toEqual(mockState)
  })

  it('should return state as message string', () => {
    const mockBoolean = true
    const action = actions.isLoading(mockBoolean)

    const result = loadingReducer(mockState, action)

    expect(result).toEqual(mockBoolean)
  })
})