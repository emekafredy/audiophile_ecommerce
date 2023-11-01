/* eslint-disable react/button-has-type */
import className from 'classnames';
import PropTypes from 'prop-types';

function Button({
  title,
  fullwidth,
  rounded,
  roundedBG,
  primary,
  secondary,
  noBorder,
  buttonType,
  handleClick,
  disabled,
  uppercase,
  extraClasses,
  rightIcon,
  hasIcon,
}) {
  const classes = className(
    `xs-min:text-xs md-min:text-sm font-semibold transition
    duration-300 disabled:opacity-50 px-7 py-3 disabled:cursor-not-allowed ${extraClasses}`,
    {
      'w-full': fullwidth,
      rounded,
      'rounded-full': roundedBG,
      uppercase,
      'bg-orange-200 text-white-100 hover:bg-orange-100': primary,
      'bg-white-100 text-black-200 border border-black-200 hover:bg-black-100 hover:text-white-100':
        secondary,
      'bg-white-100 text-gray-100 hover:text-orange-200': noBorder,
      'inline-flex items-center': hasIcon,
    },
  );

  return (
    <button
      className={classes}
      type={buttonType}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
      {rightIcon}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  fullwidth: PropTypes.bool,
  rounded: PropTypes.bool,
  roundedBG: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  noBorder: PropTypes.bool,
  buttonType: PropTypes.arrayOf(['submit', 'button', 'reset']),
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  extraClasses: PropTypes.string,
  rightIcon: PropTypes.element,
  hasIcon: PropTypes.bool,
};

Button.defaultProps = {
  fullwidth: false,
  rounded: false,
  roundedBG: false,
  primary: false,
  secondary: false,
  noBorder: false,
  buttonType: 'button',
  handleClick: () => {},
  disabled: false,
  uppercase: false,
  extraClasses: '',
  rightIcon: PropTypes.element,
  hasIcon: false,
};

export default Button;
