import { createSlice } from '@reduxjs/toolkit';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    patch(state, action) {
      const patched = action.payload;
      return state.map((anecdote) => (anecdote.id === patched.id
        ? patched
        : anecdote));
    },
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    seedAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { patch, createAnecdote, seedAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
