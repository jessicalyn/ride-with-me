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