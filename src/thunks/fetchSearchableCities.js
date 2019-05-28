import { hasError, storeSearchableCities, isLoading } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const fetchSearchableCities = () => {
  return async (dispatch) => {
    const url = 'https://ride-with-me-backend.herokuapp.com/graphql/'
    try {
      dispatch(isLoading(true))
      const searchParams = '{ searchableCities{endCities{id name}startCities{id name}} }'
      const options = fetchOptionsCreator('POST', searchParams)
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      const searchableCities = result.data.searchableCities
      dispatch(isLoading(false))
      dispatch(storeSearchableCities(searchableCities))
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}