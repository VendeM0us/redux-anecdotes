import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAnecdote } from '../reducers/anecdoteReducer';

// eslint-disable-next-line no-shadow
function AnecdoteForm({ createAnecdote }) {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    createAnecdote(content);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

AnecdoteForm.propTypes = {
  createAnecdote: PropTypes.func.isRequired,
};

export default connect(
  null,
  { createAnecdote },
)(AnecdoteForm);
