function checkoutSchema(payMethod) {
  const eMoney = payMethod === 'e-money';
  return {
    name: {
      required: {
        value: true,
        message: ' is required',
      },
    },
    email: {
      required: {
        value: true,
        message: ' is required',
      },
      pattern: {
        value: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
        message: ' is not valid',
      },
    },
    phone: {
      required: {
        value: true,
        message: ' is required',
      },
      pattern: {
        value: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$',
        message: ' is not valid',
      },
    },
    address: {
      required: {
        value: true,
        message: ' is required',
      },
    },
    zip: {
      required: {
        value: true,
        message: ' is required',
      },
      pattern: {
        value: '^\\d{5}(-\\d{4})?$',
        message: ' is not valid',
      },
    },
    city: {
      required: {
        value: true,
        message: ' is required',
      },
    },
    country: {
      required: {
        value: true,
        message: ' is required',
      },
    },
    eNum: {
      required: {
        value: eMoney,
        message: ' is required',
      },
      custom: {
        isValid: (value) =>
          value.length > 8 &&
          value.length <= 15 &&
          !Number.isNaN(value),
        message: ' is not valid',
      },
    },
    pin: {
      required: {
        value: eMoney,
        message: ' is required',
      },
      custom: {
        isValid: (value) =>
          value.length === 4 && !Number.isNaN(value),
        message: ' must be 4 digits',
      },
    },
  };
}

export default checkoutSchema;
