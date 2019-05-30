import * as actions from './index';

describe('actions', () => {

  it('should return a type of HAS_ERROR with a message', () => {
    const message = 'Something went wrong'
    const expected = {
      type: 'HAS_ERROR',
      message
    }

    const result = actions.hasError(message)

    expect(result).toEqual(expected)
  })

  it('should return a type of STORE_CITIES with an array of cities', () => {
    const cities = ["Denver", "Chicago", "San Francisco"]
    const expected = {
      type: 'STORE_CITIES',
      cities
    }

    const result = actions.storeCities(cities)

    expect(result).toEqual(expected)
  })

  it('should return a type of IS_LOADING with a boolean', () => {
    const boolean = true
    const expected = {
      type: 'IS_LOADING',
      boolean
    }

    const result = actions.isLoading(boolean)

    expect(result).toEqual(expected)
  })

  it('should return a type of STORE_RIDES with an array of rides', () => {
    const rides = [{ id: 1, description: "Let's ride!" }, { id: 2, description: "Stopping at every diner!" }]
    const expected = {
      type: 'STORE_RIDES',
      rides
    }

    const result = actions.storeRides(rides)

    expect(result).toEqual(expected)
  })

  it('should return a type of STORE_SEARCH_RESULTS with an array of results', () => {
    const searchResults = [{ id: 1, description: "Let's ride!" }, { id: 2, description: "Stopping at every diner!" }]
    const expected = {
      type: 'STORE_SEARCH_RESULTS',
      searchResults
    }

    const result = actions.storeSearchResults(searchResults)

    expect(result).toEqual(expected)
  })

  it('should return a type of STORE_SEARCHABLE_CITIES with an array of cities', () => {
    const searchableCities = [{ id: 1, name: "Denver" }, { id: 2, name: "Miami" }]
    const expected = {
      type: 'STORE_SEARCHABLE_CITIES',
      searchableCities
    }

    const result = actions.storeSearchableCities(searchableCities)

    expect(result).toEqual(expected)
  })

  it('should return a type of LOGIN_USER with a user', () => {
    const user = [{ id: 1, name: "Jessica" }, { id: 2, name: "Teresa" }]
    const expected = {
      type: 'LOGIN_USER',
      user
    }

    const result = actions.loginUser(user)

    expect(result).toEqual(expected)
  })

  it('should return a type of LOGOUT_USER with a blank user', () => {
    const user = ""
    const expected = {
      type: 'LOGOUT_USER',
      user: ""
    }

    const result = actions.logoutUser(user)

    expect(result).toEqual(expected)
  })
})