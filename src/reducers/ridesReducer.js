export const ridesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_RIDES':
      return action.rides

    default:
      return state
  }
}