export const searchableCitiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_SEARCHABLE_CITIES':
      return action.searchableCities

    default:
      return state
  }
}