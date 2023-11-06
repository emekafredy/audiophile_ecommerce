import products from '../data/data.json';
import { getResponse } from '.';

export const getProductsByCategory = async (category) => {
  try {
    if (products && products.length) {
      const result = await products.filter(
        (audio) =>
          audio.category.toLowerCase() === category.toLowerCase(),
      );

      return getResponse(200, result);
    }

    return getResponse(204);
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

      return getResponse(200, result);
    }

    return getResponse(204);
  } catch (err) {
    return getResponse(500, [], false);
  }
};
