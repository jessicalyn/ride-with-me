export const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_CITIES':
      return action.cities

    default:
      return state
  }
}