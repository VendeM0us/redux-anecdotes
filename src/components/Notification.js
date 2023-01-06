import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Notification({ notification }) {
  if (notification === null) return null;

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return (
    <div style={style}>
      {notification}
    </div>
  );
}

Notification.propTypes = {
  notification: PropTypes.string,
};

Notification.defaultProps = {
  notification: null,
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps)(Notification);
