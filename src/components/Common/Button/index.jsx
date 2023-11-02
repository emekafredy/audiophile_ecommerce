/* eslint-disable react/forbid-prop-types */
import className from 'classnames';
import PropTypes from 'prop-types';

function Button({
  content,
  fullwidth,
  rounded,
  roundedBG,
  primary,
  secondary,
  black,
  transparent,
  handleClick,
  disabled,
  uppercase,
  extraClasses,
  rightIcon,
  hasIcon,
  transparentBlack,
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
      'bg-black-200 text-white-100 hover:bg-gray-300 hover:text-white-100':
        black,
      'bg-transparent text-gray-100 hover:text-orange-200': transparent,
      'bg-transparent text-black-200 border border-black-200 hover:text-white-100 hover:bg-black-200':
        transparentBlack,
      'inline-flex items-center': hasIcon,
    },
  );

  return (
    <button
      className={classes}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {content}
      {rightIcon}
    </button>
  );
}

Button.propTypes = {
  content: PropTypes.any.isRequired,
  fullwidth: PropTypes.bool,
  rounded: PropTypes.bool,
  roundedBG: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  black: PropTypes.bool,
  transparent: PropTypes.bool,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
  extraClasses: PropTypes.string,
  rightIcon: PropTypes.any,
  hasIcon: PropTypes.bool,
  transparentBlack: PropTypes.bool,
};

Button.defaultProps = {
  fullwidth: false,
  rounded: false,
  roundedBG: false,
  primary: false,
  secondary: false,
  black: false,
  transparent: false,
  handleClick: () => {},
  disabled: false,
  uppercase: false,
  extraClasses: '',
  rightIcon: '',
  hasIcon: false,
  transparentBlack: false,
};

export default Button;
