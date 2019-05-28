import { hasError, isLoading, storeSearchResults } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const fetchRideSearch = (queryVariables) => {
  return async (dispatch) => {
    const url = 'https://ride-with-me-backend.herokuapp.com/graphql/?query='
    try {
      dispatch(isLoading(true))
      const options = fetchOptionsCreator('POST', queryVariables)
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      dispatch(isLoading(false))
      dispatch(storeSearchResults(result.data.searchRidesByCities))
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}