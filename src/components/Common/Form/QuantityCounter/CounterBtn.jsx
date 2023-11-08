import PropTypes from 'prop-types';

function CounterBtn({
  sign,
  inStock,
  loading,
  handleCounter,
  large,
}) {
  return (
    <button
      className={`bg-gray-100 text-black-200 opacity-75 hover:opacity-100 hover:bg-gray-300
          hover:text-orange-200 hover:font-bold ${
            large
              ? 'py-3 xs-max:px-3 sm-min:px-6 md-min:px-4 xl-min:px-5'
              : 'px-3 py-1'
          }
          cursor-pointer text-md font-bold transition-full
          duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
      type="button"
      onClick={() => handleCounter()}
      disabled={!inStock || loading}
    >
      {sign}
    </button>
  );
}

CounterBtn.propTypes = {
  sign: PropTypes.string.isRequired,
  inStock: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleCounter: PropTypes.func.isRequired,
  large: PropTypes.bool,
};

CounterBtn.defaultProps = {
  large: false,
};

export default CounterBtn;
