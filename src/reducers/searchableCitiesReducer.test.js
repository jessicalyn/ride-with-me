import { searchableCitiesReducer } from './searchableCitiesReducer';
import * as actions from '../actions';

describe('searchableCitiesReducer', () => {
  const state = []

  it('should return state by default', () => {
    const action = {}

    const result = searchableCitiesReducer(state, action)

    expect(result).toEqual(state)
  })

  it('should return state as an array of cities', () => {
    const mockCities = ["Denver", "Chicago", "San Francisco"]
    const action = actions.storeSearchableCities(mockCities)

    const result = searchableCitiesReducer(state, action)

    expect(result).toEqual(mockCities)
  })
})