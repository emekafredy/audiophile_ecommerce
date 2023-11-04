import products from '../data/data.json';
import { getResponse } from '.';

async function getProductsByCategory(category) {
  try {
    if (products && products.length) {
      const result = await products.filter(
        (audio) =>
          audio.category.toLowerCase() ===
          category.toLowerCase(),
      );

      return getResponse(200, result);
    }

    return getResponse(204);
  } catch (err) {
    return getResponse(500, [], false);
  }
}

export default getProductsByCategory;
