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
})