import { fetchRideInfo } from './fetchRideInfo';
import { hasError, storeRides } from '../actions';

describe('fetchRideInfo', () => {
  let mockUrl
  let mockDispatch
  let mockResult

  beforeEach(() => {
    mockUrl = "www.webuiltthiscity.com"
    mockDispatch = jest.fn()
    mockResult = { data: { availableRides: { id: 1, startCity: {name: "Denver"}} }}
  })

  it('should dispatch storeRides if the response is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult)
    }))

    const thunk = await fetchRideInfo()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storeRides(mockResult.data.availableRides))
  })

  it('should dispatch hasError if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: "Something went wrong"
    }))

    const thunk = await fetchRideInfo()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Something went wrong"))
  })
  
})