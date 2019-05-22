import { hasError, storeCities } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const fetchCities = () => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/graphql/`
    try {
      const searchParams = '{ allCities{name} }'
      const options = fetchOptionsCreator('POST', searchParams)
      console.log(options)
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      const cities = result.data.allCities
      dispatch(storeCities(cities))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}