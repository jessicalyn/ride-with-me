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
      const cities = Object.values(result.data.searchableCities)
      console.log("cities", cities)
      // const startCities = result.data.searchableCities.startCities
      // const endCities = result.data.searchableCities.endCities
      // console.log(startCities)
      // console.log(endCities)
      dispatch(isLoading(false))
      dispatch(storeSearchableCities(cities))
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}