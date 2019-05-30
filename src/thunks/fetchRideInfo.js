import { hasError, storeRides, isLoading } from '../actions';
import { fetchOptionsCreator } from '../utils/fetchOptionsCreator';

export const fetchRideInfo = () => {
  return async (dispatch) => {
    const url = 'https://ride-with-me-backend.herokuapp.com/graphql/?query='
    try {
      dispatch(isLoading(true))
      const searchParams = '{ availableRides{id status availableSeats price description mileage travelTime driver{id uuid firstName}ridepassengerSet{passenger{id firstName}}endCity{id name}startCity{id name}} }'
      const options = fetchOptionsCreator('POST', searchParams)
      const response = await fetch(url, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      const rides = result.data.availableRides
      dispatch(isLoading(false))
      dispatch(storeRides(rides))
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}