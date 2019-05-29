import { hasError, isLoading } from '../actions';

export const mutateRejectRequest = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const options = { method: 'POST' }
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      console.log("mutateUser", result)
      dispatch(isLoading(false))
      return result
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}