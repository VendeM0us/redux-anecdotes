import { createSlice } from '@reduxjs/toolkit';
import { setNotification, removeNotification } from './notificationReducer';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateAnecdote(state, action) {
      const patched = action.payload;
      return state.map((anecdote) => (anecdote.id === patched.id
        ? patched
        : anecdote));
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    seedAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { updateAnecdote, appendAnecdote, seedAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdoteService.getAll();
  dispatch(seedAnecdotes(anecdotes));
};

export const vote = (anecdote) => async (dispatch) => {
  const updatedAnecdote = await anecdoteService.vote(anecdote);
  dispatch(updateAnecdote(updatedAnecdote));
  dispatch(setNotification(`you voted '${updatedAnecdote.content}'`));

  setTimeout(() => {
    dispatch(removeNotification());
  }, 5000);
};

export const createAnecdote = (content) => async (dispatch) => {
  const newAnecdote = await anecdoteService.create(content);
  dispatch(appendAnecdote(newAnecdote));
  dispatch(setNotification(`A new anecdote '${newAnecdote.content}' created`));

  setTimeout(() => {
    dispatch(removeNotification());
  }, 5000);
};

export default anecdoteSlice.reducer;
