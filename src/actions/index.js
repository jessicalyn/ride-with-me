export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const storeCities = (cities) => ({
  type: 'STORE_CITIES',
  cities
})
