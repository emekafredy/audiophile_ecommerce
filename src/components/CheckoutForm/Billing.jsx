/* eslint-disable react/forbid-prop-types */
import { PropTypes } from 'prop-types';
import { Input } from '../Common/Form';

function Billing({ paymentData, handleChange, errors }) {
  return (
    <div className="mt-12">
      <h3 className="font-bold uppercase text-orange-200 text-sm leading-25 tracking-xs mb-4">
        Billing Details
      </h3>
      <div className="grid sm-max:grid-cols-1 md-min:grid-cols-2 gap-4">
        <Input
          errors={errors}
          formLabel="Name"
          formTitle="name"
          inputType="text"
          placeholder="Alexei Ward"
          handleChange={handleChange('name')}
          value={paymentData.name}
        />

        <Input
          errors={errors}
          formLabel="Email"
          formTitle="email"
          inputType="text"
          placeholder="alexei@mail.com"
          handleChange={handleChange('email')}
          value={paymentData.email}
        />

        <Input
          errors={errors}
          formLabel="Phone Number"
          formTitle="phone"
          inputType="text"
          placeholder="+1 202-555-0136"
          handleChange={handleChange('phone')}
          value={paymentData.phone}
        />
      </div>
    </div>
  );
}

Billing.propTypes = {
  paymentData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.any.isRequired,
};

export default Billing;
