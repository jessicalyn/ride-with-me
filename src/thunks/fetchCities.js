import { hasError, storeCities } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const fetchCities = () => {
  return async (dispatch) => {
    const url = 'https://ride-with-me-backend.herokuapp.com/graphql/'
    try {
      const searchParams = '{ allCities{name} }'
      const options = fetchOptionsCreator('POST', searchParams)
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      const cities = result.data.allCities
      console.log(cities)
      dispatch(storeCities(cities))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}