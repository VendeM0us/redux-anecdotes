import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vote } from '../reducers/anecdoteReducer';

// eslint-disable-next-line no-shadow
function AnecdoteList({ anecdotes, vote }) {
  const handleVote = async (anecdote) => {
    vote(anecdote);
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

AnecdoteList.propTypes = {
  anecdotes: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    id: PropTypes.string,
    votes: PropTypes.number,
  })).isRequired,
  vote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  anecdotes: state.anecdotes
    .filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())),
});

const mapDispatchToProps = {
  vote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnecdoteList);
