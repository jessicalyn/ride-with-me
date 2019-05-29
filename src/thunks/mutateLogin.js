import { hasError, loginUser, isLoading } from '../actions';

export const mutateLogin = (variables) => {
  return async (dispatch) => {
    const url = 'https://ride-with-me-backend.herokuapp.com/graphql/?query=mutation($email:String!,$firstName:String!,$lastName:String!,$imageUrl:String!){loginUser(email:$email,firstName:$firstName,lastName:$lastName,imageUrl:$imageUrl){user{id,firstName,lastName,email,uuid,imageUrl}}}&variables='
    try {
      dispatch(isLoading(true))
      const urlVariables = url + variables
      const options = { method: 'POST' }
      const response = await fetch(urlVariables, options)
      if (!response.ok) {
        throw Error (response.statusText)
      }
      const result = await response.json()
      const user = result.data.loginUser.user
      
      console.log("mutateLogin", user)
      dispatch(isLoading(false))
      dispatch(loginUser(user))
    } catch(error) {
      dispatch(isLoading(false))
      dispatch(hasError(error.message))
    }
  }
}