export const fetchOptionsCreator = (type, body) => ({
  method: type,
  body: JSON.stringify({ query: `${body}` }),
  headers:{
    'Content-Type': 'application/json'
  }
})