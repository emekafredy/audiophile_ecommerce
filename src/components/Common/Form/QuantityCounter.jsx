import PropTypes from 'prop-types';

function QuantityCounter({ quantity, setQuantity, productQuantity }) {
  const inStock = productQuantity > 0;
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleQuantityIncrease = () => {
    if (quantity < productQuantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex">
      <button
        className="bg-gray-100 text-black-200 opacity-75 hover:opacity-100 hover:bg-gray-300
          hover:text-orange-200 hover:font-bold py-3 xs-max:px-3 sm-min:px-6 md-min:px-4
          xl-min:px-5 cursor-pointer text-md font-bold transition-full
          duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        type="button"
        onClick={() => handleQuantityDecrease()}
        disabled={!inStock}
      >
        -
      </button>
      <span
        className={`text-center py-3 w-8 text-black-200 font-bold bg-gray-100 ${
          !inStock ? 'opacity-50' : ''
        }`}
      >
        {quantity}
      </span>
      <button
        className="bg-gray-100 text-black-200 opacity-75 hover:opacity-100 hover:bg-gray-300
          hover:text-orange-200 hover:font-bold py-3 xs-max:px-3 sm-min:px-6 md-min:px-4
          xl-min:px-5 cursor-pointer text-md font-bold transition-full
          duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        type="button"
        onClick={() => handleQuantityIncrease()}
        disabled={!inStock}
      >
        +
      </button>
    </div>
  );
}

QuantityCounter.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  productQuantity: PropTypes.number.isRequired,
};

export default QuantityCounter;
