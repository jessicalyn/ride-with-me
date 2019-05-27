import { hasError, storeRides, isLoading } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const fetchRideInfo = () => {
  return async (dispatch) => {
    const url = 'https://ride-with-me-backend.herokuapp.com/graphql/'
    try {
      dispatch(isLoading(true))
      const searchParams = '{ allCities{name, id} }'
      const options = fetchOptionsCreator('POST', searchParams)
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      const cities = result.data.allCities
      console.log(cities)
      dispatch(isLoading(false))
      dispatch(storeCities(cities))
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}