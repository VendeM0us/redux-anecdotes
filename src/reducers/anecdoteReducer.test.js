import deepFreeze from 'deep-freeze';
import reducer from './anecdoteReducer';

describe('anecdote reducer', () => {
  const initialState = [
    {
      content: 'anecdote 1',
      id: 1,
      votes: 0,
    },
    {
      content: 'anecdote 2',
      id: 2,
      votes: 0,
    },
    {
      content: 'anecdote 3',
      id: 3,
      votes: 0,
    },
  ];

  test('should handle patch', () => {
    const action = {
      type: 'anecdotes/patch',
      payload: {
        content: 'anecdote 2',
        id: 2,
        votes: 1,
      },
    };
    const state = initialState;

    deepFreeze(state);
    const newState = reducer(state, action);
    expect(newState).toContainEqual(initialState[0]);
    expect(newState).toContainEqual(initialState[2]);
    expect(newState).toContainEqual({
      content: 'anecdote 2',
      id: 2,
      votes: 1,
    });
  });

  test('should add new anecdote', () => {
    const action = {
      type: 'anecdotes/createAnecdote',
      payload: {
        content: 'anecdote 4',
        votes: 0,
        id: 4,
      },
    };
    const state = initialState;

    deepFreeze(state);
    const newState = reducer(state, action);
    expect(newState).toHaveLength(4);
    expect(newState.map((anecdote) => anecdote.content)).toContainEqual('anecdote 4');
  });
});
