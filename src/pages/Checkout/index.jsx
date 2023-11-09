import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../../components/Cart/Cart';
import { getCartState } from '../../store/slices/cart';
import CheckoutForm from '../../components/CheckoutForm';
import checkoutSchema from '../../schema/checkout';
import useCheckoutForm from '../../hooks/useCheckoutForm';
import { createOrder } from '../../crud/order';
import {
  renderErrorMessage,
  renderSuccessMessage,
} from '../../helpers';
import OrderModal from '../../components/OrderModal';
import useFetchPaymentData from '../../hooks/useFetchPaymentData';
import { getPaymentDataState } from '../../store/slices/paymentData';

function Checkout() {
  useFetchPaymentData();
  const navigate = useNavigate();

  const [loading] = useState(false);
  const [savePaymentData, setSavePaymentData] = useState(true);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const [order, setOrder] = useState({ grandTotal: '', items: [] });

  const { cart } = useSelector(getCartState);
  const { paymentData: paymentDetails } = useSelector(
    getPaymentDataState,
  );
  const [paymentData, setPaymentData] = useState(paymentDetails);

  useEffect(() => {
    setPaymentData(paymentDetails);
  }, [paymentDetails]);

  const handlePayment = async () => {
    try {
      const { data, message } = await createOrder(
        cart,
        savePaymentData,
        paymentData,
      );
      await setOrder(data);
      setShowOrderModal(true);
      renderSuccessMessage(message);
    } catch (err) {
      renderErrorMessage(err);
    }
  };

  const {
    handleSubmit,
    handleChange,
    errors,
    handlePaymentMethodChange,
  } = useCheckoutForm(
    {
      validations: checkoutSchema(paymentData.payMethod),
      onSubmit: handlePayment,
    },
    paymentData,
    setPaymentData,
  );

  return (
    <div className="bg-white-300 pb-24">
      <div className="lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto pt-16">
        <span
          role="button"
          className="text-smii font-regular leading-25 text-black-200 opacity-50"
          onClick={() => navigate(-1)}
          onKeyDown={() => navigate(-1)}
          tabIndex={-4}
        >
          Go Back
        </span>

        <div className="flex md-max:flex-col lg-min:flex-row gap-6 mt-6">
          <CheckoutForm
            paymentData={paymentData}
            handleChange={handleChange}
            errors={errors}
            handlePaymentMethodChange={handlePaymentMethodChange}
            savePaymentData={savePaymentData}
            setSavePaymentData={setSavePaymentData}
          />
          <div className="sticky top-28 md-max:w-[100%] lg-min:w-[30%] bg-white-100 rounded-lg p-8 max-h-[650px]">
            <Cart
              loading={loading}
              cart={cart}
              cta="Continue & Pay"
              handleClick={handleSubmit}
              checkoutMode
            />
          </div>
        </div>
      </div>
      {showOrderModal && (
        <OrderModal setShowModal={setShowOrderModal} order={order} />
      )}
    </div>
  );
}

export default Checkout;
