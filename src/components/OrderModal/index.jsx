import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Modal } from '../Common';
import OrderItem from './OrderItem';
import OrderConfirmationIcon from '../../assets/checkout/icon-order-confirmation.svg';
import { removeCart } from '../../store/slices/cart';

function OrderModal({ setShowModal, order }) {
  const [showAll, setShowAll] = useState(false);
  const [data, setData] = useState([order.items[0]]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (showAll) {
      setData(order.items);
    } else {
      setData([order.items[0]]);
    }
  }, [showAll, order.items]);

  const handleClearCart = async () => {
    await dispatch(removeCart());
    navigate('/');
  };

  return (
    <Modal
      setShowModal={setShowModal}
      modalStyles="relative md-min:w-[550px] m-auto"
      centered
    >
      <div className="bg-white-100 px-10 py-12 rounded-lg">
        <img
          src={OrderConfirmationIcon}
          alt="order-confirmation-icon"
        />

        <h2
          className="font-bold xs-max:text-md sm-min:text-2xl text-black-200
            tracking-xs uppercase mt-8 w-[350px] flex flex-col"
        >
          <span>Thank you</span>
          <span>For your order</span>
        </h2>

        <p className="font-regular leading-25 xs-max:text-xs sm-min:text-smii text-black-200 opacity-50 mt-8">
          You will receive an email confirmation shortly.
        </p>

        <div className="flex xs-max:flex-col sm-min:flex-row mt-8">
          <div
            className="bg-gray-100 xs-max:w-[100%] sm-min:w-[50%]
              xs-max:rounded-t-lg sm-min:rounded-l-lg py-6 px-4"
          >
            {data?.map((item) => {
              return <OrderItem key={item.slug} item={item} />;
            })}
            <hr className="border border-gray-100" />
            {order.items.length > 1 && (
              <div className="text-center">
                {showAll ? (
                  <Button
                    transparent
                    content="Show less"
                    handleClick={() => setShowAll(false)}
                  />
                ) : (
                  <Button
                    transparent
                    content={`and ${
                      order.items.length - 1
                    } other item(s)`}
                    handleClick={() => setShowAll(true)}
                  />
                )}
              </div>
            )}
          </div>

          <div
            className="bg-black-100 xs-max:w-[100%] sm-min:w-[50%] xs-max:rounded-b-lg
              sm-min:rounded-r-lg flex flex-col justify-center pl-8 xs-max:py-8"
          >
            <p className="uppercase font-regular text-smii leading-25 text-white-100 opacity-50">
              Grand Total
            </p>
            <p className="uppercase font-bold text-md leading-25 text-white-100">
              $ {order.grandTotal}
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            primary
            uppercase
            fullwidth
            paddedX
            content="Back To Home"
            handleClick={handleClearCart}
          />
        </div>
      </div>
    </Modal>
  );
}

OrderModal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  order: PropTypes.shape({
    grandTotal: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        totalPrice: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default OrderModal;
