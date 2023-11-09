import products from '../data/data.json';
import { getResponse, emptyProductState } from '.';

export const getProductsByCategory = async (category) => {
  try {
    if (products && products.length) {
      const result = await products.filter(
        (audio) =>
          audio.category.toLowerCase() === category.toLowerCase(),
      );

      return getResponse(200, result, true);
    }

    return getResponse(204, [], true);
  } catch (err) {
    return getResponse(500, [], false);
  }
};

export const getProduct = async (slug) => {
  try {
    if (products && products.length) {
      const result = await products.find(
        (product) => product.slug === slug,
      );

      if (result) {
        return getResponse(200, result, true);
      }
    }
    return getResponse(204, emptyProductState, true);
  } catch (err) {
    return getResponse(500, emptyProductState, false);
  }
};
