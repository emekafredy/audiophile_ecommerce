import PropTypes from 'prop-types';

function Radio({
  value,
  handleChange,
  option,
  title,
  radioName,
  checked,
}) {
  return (
    <div
      className={`flex items-center pl-4 border ${
        checked ? 'border-orange-200' : 'border-gray-200'
      } rounded mb-4`}
    >
      <input
        checked={checked}
        type="radio"
        value={value}
        name={radioName}
        id={title}
        className="w-4 h-4 text-orange-200 bg-orange-200 accent-orange-200 cursor-pointer"
        onChange={handleChange}
      />
      <label
        htmlFor={title}
        className="font-bold text-black-200 text-xs leading-16 py-4 ml-4"
      >
        {option}
      </label>
    </div>
  );
}

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  radioName: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default Radio;
