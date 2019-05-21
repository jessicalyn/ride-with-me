import { hasError, storeCities } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const fetchCities = () => {
  return async (dispatch) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/`
    try {
      const body = whatevertheyneed
      const options = fetchOptionsCreator('POST', body)
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      dispatch(storeCities(cities))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}