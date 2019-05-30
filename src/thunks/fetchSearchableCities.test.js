import { fetchSearchableCities } from './fetchSearchableCities';
import { hasError, storeSearchableCities } from '../actions';

describe('fetchSearchableCities', () => {
  let mockUrl
  let mockDispatch
  let mockResult

  beforeEach(() => {
    mockUrl = "www.webuiltthiscity.com"
    mockDispatch = jest.fn()
    mockResult = { data: { searchableCities: { id: 1, startCity: {name: "Denver"}} }}
  })

  it('should dispatch storeSearchableCities if the response is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult)
    }))

    const thunk = await fetchSearchableCities()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeSearchableCities(mockResult.data.searchableCities))
  })

  it('should dispatch hasError if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: "Something went wrong"
    }))

    const thunk = await fetchSearchableCities()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Something went wrong"))
  })
  
})