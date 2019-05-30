import { searchResultsReducer } from './searchResultsReducer';
import * as actions from '../actions';

describe('searchResultsReducer', () => {
  const state = []

  it('should return state by default', () => {
    const action = {}

    const result = searchResultsReducer(state, action)

    expect(result).toEqual(state)
  })

  it('should return state as an array of results', () => {
    const mockResults = [{id: 1, name: "Denver"}, {id: 2, name: "Chicago"}, {id: 4, name: "San Francisco"}]
    const action = actions.storeSearchResults(mockResults)

    const result = searchResultsReducer(state, action)

    expect(result).toEqual(mockResults)
  })
})