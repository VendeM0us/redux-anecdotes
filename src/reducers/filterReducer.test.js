import deepFreeze from 'deep-freeze';
import filterReducer from './filterReducer';

describe('filter reducer', () => {
  test('should set filter', () => {
    const state = ''
    const action = {
      type: 'filter/setFilter',
      payload: 'test filter'
    }

    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState).toBe('test filter')
  })
})
