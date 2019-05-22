import { citiesReducer } from './citiesReducer';
import * as actions from '../actions';

describe('citiesReducer', () => {
  const state = []

  it('should return state by default', () => {
    const action = {}

    const result = citiesReducer(state, action)

    expect(result).toEqual(state)
  })

  it('should return state as an array of cities', () => {
    const mockCities = ["Denver", "Chicago", "San Francisco"]
    const action = actions.storeCities(mockCities)

    const result = citiesReducer(state, action)

    expect(result).toEqual(mockCities)
  })
})