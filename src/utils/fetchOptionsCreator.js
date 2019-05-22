export const fetchOptionsCreator = (type, searchParams) => ({
  method: type,
  body: JSON.stringify({ query: `${searchParams}` }),
  headers:{
    'Content-Type': 'application/json'
  }
})