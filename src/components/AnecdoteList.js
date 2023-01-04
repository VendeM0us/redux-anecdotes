import { useDispatch, useSelector } from 'react-redux';
import { patch } from '../reducers/anecdoteReducer';
import { setNotification, removeNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

function AnecdoteList() {
  const filter = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) => state.anecdotes)
    .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()));

  const dispatch = useDispatch();

  const handleVote = async (anecdote) => {
    const updatedAnecdote = await anecdoteService.vote(anecdote);
    dispatch(patch(updatedAnecdote));
    dispatch(setNotification(`you voted '${updatedAnecdote.content}'`));

    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  const anecdotesCopy = anecdotes.slice(0);
  anecdotesCopy.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes);

  return (
    <>
      {anecdotesCopy.map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has
            {' '}
            {anecdote.votes}
            <button type="button" onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
