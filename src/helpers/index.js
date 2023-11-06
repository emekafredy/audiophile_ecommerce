export const getScreenSize = (screenSize) => {
  if (screenSize <= 570) {
    return 'mobile';
  }

  if (screenSize > 570 && screenSize < 968) {
    return 'tablet';
  }

  return 'desktop';
};

export const setActiveLinkColor = (title, category, prodCategory) => {
  if (category && prodCategory === title) {
    return 'text-orange-200';
  }
  if (
    (category === undefined ||
      category === null ||
      category === '') &&
    title === 'home'
  ) {
    return 'text-orange-200';
  }

  return 'text-white-100';
};

export const formatAndSeparateNumber = (num) => {
  const str = num?.toString() || '';
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
