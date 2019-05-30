import { fetchRideSearch } from './fetchRideSearch';
import { hasError, storeSearchResults } from '../actions';

describe('fetchRideSearch', () => {
  let mockUrl
  let mockDispatch
  let mockResult

  beforeEach(() => {
    mockUrl = "www.webuiltthiscity.com"
    mockDispatch = jest.fn()
    mockResult = { data: { searchRidesByCities: { id: 1, startCity: {name: "Denver"}} }}
  })

  it('should dispatch storeSearchResults if the response is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult)
    }))

    const thunk = await fetchRideSearch()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeSearchResults(mockResult.data.searchRidesByCities))
  })

  it('should dispatch hasError if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: "Something went wrong"
    }))

    const thunk = await fetchRideSearch()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Something went wrong"))
  })
  
})