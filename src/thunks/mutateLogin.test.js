import { mutateLogin } from './mutateLogin';
import { hasError, loginUser } from '../actions';

describe('mutateLogin', () => {
  let mockUrl
  let mockDispatch
  let mockResult

  beforeEach(() => {
    mockUrl = "www.webuiltthiscity.com"
    mockDispatch = jest.fn()
    mockResult = { data: { loginUser: { user: { name: "Archie"} }}}
  })

  it('should dispatch loginUser if the response is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult)
    }))

    const thunk = await mutateLogin()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(loginUser(mockResult.data.loginUser.user))
  })

  it('should dispatch hasError if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: "Something went wrong"
    }))

    const thunk = await mutateLogin()

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasError("Something went wrong"))
  })
  
})