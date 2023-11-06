import PropTypes from 'prop-types';

function Input({ quantity }) {
  return (
    <div className="flex">
      <input type="text" value={quantity} />
    </div>
  );
}

Input.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Input;
