export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const storeCities = (cities) => ({
  type: 'STORE_CITIES',
  cities
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  boolean
})

export const storeRides = (rides) => ({
  type: 'STORE_RIDES',
  rides
})

export const storeSearchResults = (searchResults) => ({
  type: 'STORE_SEARCH_RESULTS',
  searchResults
})

export const storeSearchableCities = (searchableCities) => ({
  type: 'STORE_SEARCHABLE_CITIES',
  searchableCities
})