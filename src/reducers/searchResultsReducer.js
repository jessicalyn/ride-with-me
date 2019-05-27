export const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_SEARCH_RESULTS":
      return action.searchResults

    default:
      return state
  }
}