import { fetchOptionsCreator } from './fetchOptionsCreator';

describe('fetchOptionsCreator', () => {
  let mockType
  let mockSearchParams

  beforeEach(() => {
    mockType = 'POST';
    mockSearchParams = '{ allCities{name} }'
  })

  it('should return expected data', async () => {
    const result = await fetchOptionsCreator(mockType, mockSearchParams)
    const expected = {
      method: mockType,
      body: JSON.stringify({ query: `${mockSearchParams}` }),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    expect(result).toEqual(expected)
  })
})