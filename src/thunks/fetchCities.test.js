import { fetchCities } from './fetchCities';
import { hasError, storeCities } from '../actions';

describe('fetchCities', () => {
  let mockUrl
  let mockDispatch
  let mockResult
  let mockCities

  beforeEach(() => {
    mockUrl = "www.webuiltthiscity.com"
    mockDispatch = jest.fn()
    mockResult = { data: { allCities: [ 'Denver', 'Chicago', 'San Francisco' ] } }
  })

  it('should dispatch storeCities if the response is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult)
    }))

    const thunk = await fetchCities()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeCities(mockResult.data.allCities))
  })

  it('should dispatch hasError if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: "Something went wrong"
    }))

    const thunk = await fetchCities()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Something went wrong"))
  })
  
})