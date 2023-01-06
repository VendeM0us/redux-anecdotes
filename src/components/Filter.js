import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../reducers/filterReducer';

// eslint-disable-next-line no-shadow
function Filter({ setFilter }) {
  const handleChange = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter
      {' '}
      <input onChange={handleChange} />
    </div>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default connect(
  null,
  { setFilter },
)(Filter);
