import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal, Button, Spinner } from '../Common';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';
import { removeCart } from '../../store/slices/cart';

function CartModal({ setShowModal, loading, cart }) {
  const navigate = useNavigate();
  const emptyCart = cart.length === 0;
  const dispatch = useDispatch();

  const navigateToCheckout = () => {
    setShowModal(false);
    navigate('/checkout');
  };

  const handleRemoveCart = async () => {
    await dispatch(removeCart());
  };

  return (
    <Modal
      modalStyles="bg-white-100 mt-28 rounded-lg xs-max:p-4 sm-min:p-8
        md-min:w-[450px] sm-max:mx-auto md-min:float-right"
      setShowModal={setShowModal}
    >
      {loading ? (
        <Spinner />
      ) : (
        <div className="">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-md text-black-200 leading-25 tracking-sm uppercase">
              Cart ({cart.length})
            </h3>
            <Button
              transparent
              disabled={emptyCart}
              content="Remove all"
              handleClick={handleRemoveCart}
            />
          </div>

          {cart.length > 0 ? (
            cart.map((item) => {
              return <CartItem key={item.slug} item={item} />;
            })
          ) : (
            <EmptyCart />
          )}
          <Button
            primary
            fullwidth
            uppercase
            handleClick={navigateToCheckout}
            content="Checkout"
            disabled={emptyCart}
          />
        </div>
      )}
    </Modal>
  );
}

CartModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default CartModal;
