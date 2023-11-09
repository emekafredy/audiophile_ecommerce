import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Spinner } from '../Common';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { removeCart } from '../../store/slices/cart';
import Fees from './Fees';

function Cart({ loading, cart, cta, handleClick, checkoutMode }) {
  const emptyCart = cart.length === 0;
  const dispatch = useDispatch();

  const handleRemoveCart = async () => {
    await dispatch(removeCart());
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="bg-white-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-md text-black-200 leading-25 tracking-sm uppercase">
          {checkoutMode ? 'Summary' : `Cart (${cart.length})`}
        </h3>
        {!checkoutMode && (
          <Button
            transparent
            disabled={emptyCart}
            content="Remove all"
            handleClick={handleRemoveCart}
            classExtension="underline"
          />
        )}
      </div>

      <div className="max-h-[250px] overflow-y-scroll">
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <CartItem
                key={item.slug}
                item={item}
                checkoutMode={checkoutMode}
              />
            );
          })
        ) : (
          <EmptyCart />
        )}
      </div>

      <Fees cart={cart} checkoutMode={checkoutMode} />
      <Button
        primary
        fullwidth
        uppercase
        handleClick={handleClick}
        content={cta}
        disabled={emptyCart}
      />
    </div>
  );
}

Cart.propTypes = {
  loading: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  checkoutMode: PropTypes.bool,
  cta: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  checkoutMode: false,
};

export default Cart;
