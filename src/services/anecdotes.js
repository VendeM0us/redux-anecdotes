import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (content) => {
  const newAnecdote = {
    content,
    id: nanoid(),
    votes: 0,
  };

  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const vote = async (anecdote) => {
  const { id, votes } = anecdote;
  const patch = { votes: votes + 1 };

  const response = await axios
    .patch(`${baseUrl}/${id}`, patch);
  return response.data;
};

export default { getAll, create, vote };
