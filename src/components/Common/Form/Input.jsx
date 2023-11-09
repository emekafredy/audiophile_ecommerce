/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';

function Input({
  formLabel,
  formTitle,
  inputType,
  placeholder,
  errors,
  handleChange,
  value,
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <label
          className="block font-bold text-black-200 text-xs leading-16 mb-2"
          htmlFor={formTitle}
        >
          {formLabel}
        </label>

        {errors[formTitle] && (
          <label
            className="block font-regular text-red-100 text-xs leading-16 mb-2"
            htmlFor={formTitle}
          >
            {formLabel}
            {errors[formTitle]}
          </label>
        )}
      </div>
      <input
        className={`border ${
          errors[formTitle] ? 'border-red-100' : 'border-gray-500'
        } bg-white-100 text-sm h-12 rounded w-full placeholder-gray-200
        py-2 px-3 text-black-100 focus:outline-orange-200 hover:border-orange-200`}
        id={formTitle}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleChange}
        autoComplete="on"
      />
    </div>
  );
}

Input.propTypes = {
  formLabel: PropTypes.string.isRequired,
  formTitle: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.any.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
