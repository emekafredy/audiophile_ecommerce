/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';
import Billing from './Billing';
import Shipping from './Shipping';
import PaymentDetails from './PaymentDetails';
import CashOnDeliveryIcon from '../../assets/checkout/icon-cash-on-delivery.svg';

function CheckoutForm({
  paymentData,
  handleChange,
  errors,
  handlePaymentMethodChange,
  savePaymentData,
  setSavePaymentData,
}) {
  return (
    <div className="md-max:w-[100%] lg-min:w-[70%] bg-white-100 rounded-lg sm-max:p-4 md-min:p-16">
      <div className="flex xs-max:flex-col sm-min:flex-row items-center justify-between">
        <h2 className="leading-36 font-bold uppercase xs-max:text-lg sm-min:text-xl md-min:text-2xl text-black-200 tracking-md">
          Checkout
        </h2>

        <label htmlFor="saveDetails">
          <input
            checked={savePaymentData}
            onChange={() => setSavePaymentData(!savePaymentData)}
            id="saveDetails"
            type="checkbox"
            className="w-4 h-4 text-orange-200 bg-orange-200 border-orange-200 rounded cursor-pointer accent-orange-200"
          />
          <span className="ml-2 text-sm font-medium text-black-200 opacity-50">
            Save details?
          </span>
        </label>
      </div>

      <Billing
        paymentData={paymentData}
        handleChange={handleChange}
        errors={errors}
      />

      <Shipping
        paymentData={paymentData}
        handleChange={handleChange}
        errors={errors}
      />

      <PaymentDetails
        paymentData={paymentData}
        handleChange={handleChange}
        errors={errors}
        handlePaymentMethodChange={handlePaymentMethodChange}
      />

      {paymentData.payMethod === 'delivery' && (
        <div className="flex gap-4 mt-8 items-center justify-start">
          <img src={CashOnDeliveryIcon} alt="cash-delivery-icon" />
          <p className="font-regular text-smii leading-25 text-black-200 opacity-50">
            The ‘Cash on Delivery’ option enables you to pay in cash
            when our delivery courier arrives at your residence. Just
            make sure your address is correct so that your order will
            not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
}

CheckoutForm.propTypes = {
  paymentData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    eNum: PropTypes.string.isRequired,
    pin: PropTypes.string.isRequired,
    payMethod: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.any.isRequired,
  handlePaymentMethodChange: PropTypes.func.isRequired,
  savePaymentData: PropTypes.bool.isRequired,
  setSavePaymentData: PropTypes.func.isRequired,
};

export default CheckoutForm;
