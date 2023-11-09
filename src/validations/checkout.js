/* eslint-disable no-param-reassign */
export const validateCheckout = (
  validations,
  paymentData,
  newErrors,
) => {
  let valid = true;
  if (validations) {
    Object.keys(validations).forEach((key) => {
      const value = paymentData[key].trim();
      const validation = validations[key];
      if (validation?.required?.value && !value) {
        valid = false;
        newErrors[key] = validation?.required?.message;
      }

      const pattern = validation?.pattern;
      if (
        value &&
        pattern?.value &&
        !RegExp(pattern.value).test(value)
      ) {
        valid = false;
        newErrors[key] = pattern.message;
      }

      const custom = validation?.custom;
      if (value && custom?.isValid && !custom.isValid(value)) {
        valid = false;
        newErrors[key] = custom.message;
      }
    });
  }

  return valid;
};

export const validatePayMethod = () => {};
