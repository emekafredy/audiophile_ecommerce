/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';
import { Input } from '../Common/Form';

function Shipping({ paymentData, handleChange, errors }) {
  return (
    <div className="mt-12">
      <h3 className="font-bold uppercase text-orange-200 text-sm leading-25 tracking-xs mb-4">
        Shipping Info
      </h3>

      <div className="mb-8">
        <Input
          errors={errors}
          formLabel="Address"
          formTitle="address"
          inputType="text"
          placeholder="1137 Williams Avenue"
          handleChange={handleChange('address')}
          value={paymentData.address}
        />
      </div>
      <div className="grid sm-max:grid-cols-1 md-min:grid-cols-2 gap-4">
        <Input
          errors={errors}
          formLabel="Zip Code"
          formTitle="zip"
          inputType="text"
          placeholder="10001 or 10001-1234"
          handleChange={handleChange('zip')}
          value={paymentData.zip}
        />

        <Input
          errors={errors}
          formLabel="City"
          formTitle="city"
          inputType="text"
          placeholder="New York"
          handleChange={handleChange('city')}
          value={paymentData.city}
        />

        <Input
          errors={errors}
          formLabel="Country"
          formTitle="country"
          inputType="text"
          placeholder="United States"
          handleChange={handleChange('country')}
          value={paymentData.country}
        />
      </div>
    </div>
  );
}

Shipping.propTypes = {
  paymentData: PropTypes.shape({
    address: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.any.isRequired,
};

export default Shipping;
