import PropTypes from 'prop-types';

function NoData({ message }) {
  return (
    <div className="flex items-center justify-center h-60 bg-white-200">
      <p className="text-black-200 opacity-75 text-lg">
        {message}
      </p>
    </div>
  );
}

NoData.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoData;
