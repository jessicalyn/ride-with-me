import { hasError, isLoading } from '../actions';

export const mutateLogin = (variables) => {
  return async (dispatch) => {
    const url = 'https://ride-with-me-backend.herokuapp.com/graphql/?query=mutation($email:String!,$firstName:String!,$lastName:String!){loginUser(email:$email,firstName:$firstName,lastName:$lastName){user{id,firstName,lastName,email,uuid}}}&variables='
    try {
      dispatch(isLoading(true))
      const urlVariables = url + variables
      const options = { method: 'POST' }
      console.log("url correct?", urlVariables)
      const response = await fetch(urlVariables, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      console.log(result)
      dispatch(isLoading(false))
      // dispatch(storeSearchableCities(searchableCities))
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}