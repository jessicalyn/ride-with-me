import * as actions from './index';

describe('actions', () => {

  it('should return a type of HAS_ERROR with a message', () => {
    const message = 'Something went wrong'
    const expected = {
      type: 'HAS_ERROR',
      message
    }

    const result = actions.hasError(message)

    expect(result).toEqual(expected)
  })
})