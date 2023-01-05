import { useDispatch, useSelector } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';

function AnecdoteList() {
  const filter = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) => state.anecdotes)
    .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()));

  const dispatch = useDispatch();

  const handleVote = async (anecdote) => {
    dispatch(vote(anecdote));
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
