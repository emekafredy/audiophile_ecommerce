export const getScreenSize = (screenSize) => {
  if (screenSize <= 570) {
    return 'mobile';
  }

  if (screenSize > 570 && screenSize < 968) {
    return 'tablet';
  }

  return 'desktop';
};

export const newData = {
  lost: false,
};
