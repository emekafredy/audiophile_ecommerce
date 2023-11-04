/* eslint-disable no-nested-ternary */
import { useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';
import CategoryHeader from './CategoryHeader';
import useFetchProductsByCategory from '../../hooks/useFetchProductsByCategory';
import Categories from '../../components/Common/Categories';
import AudioGear from '../../components/Common/AudioGear';
import Spinner from '../../components/Common/Spinner';
import { getProductsState } from '../../store/slices/product';
import NoData from '../../components/Common/NoData';

import {
  categoriesData,
  audioGearData,
} from '../../data';
import ProductDetailsSection from '../../components/Common/ProductDetailsSection';

function Category() {
  const { screenSize } = useScreenSize();
  const { loading, category } =
    useFetchProductsByCategory();
  const { products } = useSelector(
    getProductsState,
  );

  return (
    <>
      <CategoryHeader category={category} />

      {loading ? (
        <Spinner />
      ) : products && products.length > 0 ? (
        products?.map((product, i) => {
          return (
            <ProductDetailsSection
              key={product.id}
              hasCTA
              cta="See Product"
              isEven={i % 2 === 0}
              newProduct={product.new}
              data={product}
              screenSize={screenSize}
              extraClasses="pt-32"
            />
          );
        })
      ) : (
        <NoData message="Sorry it's a bit empty here. Please check out other product categories" />
      )}

      <Categories data={categoriesData} />
      <AudioGear
        data={audioGearData}
        screenSize={screenSize}
        extraClasses="pb-32"
      />
    </>
  );
}

export default Category;
