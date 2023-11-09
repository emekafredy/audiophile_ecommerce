import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal } from '../Common';
import Cart from './Cart';

function CartModal({ setShowModal, loading, cart }) {
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    setShowModal(false);
    navigate('/checkout');
  };

  const onOverlayClick = (e) => {
    setShowModal(false);
    e.stopPropagation();
  };

  return (
    <Modal
      modalStyles="bg-white-100 mt-28 rounded-lg xs-max:p-4 sm-min:p-8
        md-min:w-[380px] sm-max:mx-auto md-min:float-right"
      setShowModal={setShowModal}
      onOverlayClick={onOverlayClick}
    >
      <Cart
        loading={loading}
        cart={cart}
        cta="Checkout"
        handleClick={navigateToCheckout}
      />
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
