/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeFromCart,
} from '../../../../store/slices/cart';
import { renderErrorMessage } from '../../../../helpers';
import CounterBtn from './CounterBtn';

function QuantityCounter({
  quantity,
  setQuantity,
  productQuantity,
  loading,
  setLoading,
  itemQuantity,
  price,
  name,
  slug,
  large,
}) {
  const dispatch = useDispatch();
  const inStock = productQuantity > 0;
  const handleQuantityDecrease = async () => {
    try {
      if (quantity > 0) {
        setLoading(true);
        const product = {
          price,
          name,
          slug,
        };

        await dispatch(removeFromCart(product));
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      renderErrorMessage(err);
    }
  };

  const handleQuantityIncrease = async () => {
    try {
      if (quantity < productQuantity) {
        setLoading(true);
        const product = {
          price,
          name,
          slug,
          quantity: productQuantity,
        };

        await dispatch(addToCart(product));
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      renderErrorMessage(err);
    }
  };

  useEffect(() => {
    setQuantity(itemQuantity);
  }, [itemQuantity]);

  return (
    <div className="flex">
      <CounterBtn
        sign="-"
        inStock={inStock}
        loading={loading}
        handleCounter={handleQuantityDecrease}
        large={large}
      />
      <span
        className={`text-center ${
          large ? 'py-3' : 'py-1'
        } w-8 text-black-200 font-bold bg-gray-100 ${
          !inStock ? 'opacity-50' : ''
        }`}
      >
        {quantity}
      </span>
      <CounterBtn
        sign="+"
        inStock={inStock}
        loading={loading}
        handleCounter={handleQuantityIncrease}
        large={large}
      />
    </div>
  );
}

QuantityCounter.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  productQuantity: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  itemQuantity: PropTypes.number,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  large: PropTypes.bool,
};

QuantityCounter.defaultProps = {
  itemQuantity: 0,
  large: false,
};

export default QuantityCounter;
