/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';
import { Input, Radio } from '../Common/Form';

function PaymentDetails({
  paymentData,
  handleChange,
  errors,
  handlePaymentMethodChange,
}) {
  const ePay = paymentData.payMethod === 'e-money';
  return (
    <div className="mt-12">
      <h3 className="font-bold uppercase text-orange-200 text-sm leading-25 tracking-xs mb-4">
        Payment Details
      </h3>

      <div className="grid sm-max:grid-cols-1 md-min:grid-cols-2 gap-4 mb-8">
        <p className="block font-bold text-black-200 text-xs leading-16 mb-2">
          Payment Method
        </p>

        <div>
          <Radio
            value="e-money"
            handleChange={() => handlePaymentMethodChange('e-money')}
            option="e-Money "
            title="e-money-method"
            radioName="pay-method"
            checked={ePay}
          />
          <Radio
            value="delivery"
            handleChange={() => handlePaymentMethodChange('delivery')}
            option="Cash on Delivery "
            title="cash-method"
            radioName="pay-method"
            checked={paymentData.payMethod === 'delivery'}
          />
        </div>
      </div>

      {ePay && (
        <div className="grid sm-max:grid-cols-1 md-min:grid-cols-2 gap-4">
          <Input
            errors={errors}
            formLabel="e-Money Number"
            formTitle="eNum"
            inputType="text"
            placeholder="238521993"
            handleChange={handleChange('eNum')}
            value={paymentData.eNum}
          />

          <Input
            errors={errors}
            formLabel="e-Money Pin"
            formTitle="pin"
            inputType="text"
            placeholder="6891"
            handleChange={handleChange('pin')}
            value={paymentData.pin}
          />
        </div>
      )}
    </div>
  );
}

PaymentDetails.propTypes = {
  paymentData: PropTypes.shape({
    eNum: PropTypes.string.isRequired,
    pin: PropTypes.string.isRequired,
    payMethod: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.any.isRequired,
  handlePaymentMethodChange: PropTypes.func.isRequired,
};

export default PaymentDetails;
