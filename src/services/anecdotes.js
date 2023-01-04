import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (content) => {
  const newAnecdote = {
    id: nanoid(),
    content,
    votes: 0,
  };

  const response = await axios.post(baseUrl, newAnecdote);
  return response.data;
};

const update = async (id, patches) => {
  const response = await axios
    .patch(`${baseUrl}/${id}`, patches);
  return response.data;
};

export default { getAll, create, update };
