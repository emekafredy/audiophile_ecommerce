export const getResponse = (
  status,
  data = [],
  success = true,
) => {
  return {
    status,
    data,
    success,
  };
};

export const logData = (data) => {
  return {
    data,
  };
};
