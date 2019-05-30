import { ridesReducer } from './ridesReducer';
import * as actions from '../actions';

describe('ridesReducer', () => {
  const state = []

  it('should return state by default', () => {
    const action = {}

    const result = ridesReducer(state, action)

    expect(result).toEqual(state)
  })

  it('should return state as an array of rides', () => {
    const mockRides = [{id: 1, startCity: {name: "Denver"}}, {id: 2, startCity: {name: "Golden"}}]
    const action = actions.storeRides(mockRides)

    const result = ridesReducer(state, action)

    expect(result).toEqual(mockRides)
  })
})