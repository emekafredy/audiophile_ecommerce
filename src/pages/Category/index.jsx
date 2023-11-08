/* eslint-disable no-nested-ternary */
import { useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';
import CategoryHeader from './CategoryHeader';
import useFetchProductsByCategory from '../../hooks/useFetchProductsByCategory';
import {
  Categories,
  AudioGear,
  Spinner,
  EmptyState,
} from '../../components/Common';
import { getProductsState } from '../../store/slices/product';

import { categoriesData, audioGearData } from '../../data';
import ProductSummarySection from '../../components/Common/ProductSummarySection';

function Category() {
  const { screenSize } = useScreenSize();
  const { loading, category } = useFetchProductsByCategory();
  const { products } = useSelector(getProductsState);

  return (
    <div className="bg-white-200">
      <CategoryHeader category={category} />

      {loading ? (
        <Spinner />
      ) : products && products.length > 0 ? (
        products?.map((product, i) => {
          return (
            <ProductSummarySection
              key={product.id}
              hasLink
              btnTitle="See Product"
              isEven={i % 2 === 0}
              newProduct={product.new}
              name={product.name}
              description={product.description}
              slug={product.slug}
              image={product.categoryImage}
              screenSize={screenSize}
              classExtension="pt-32"
              wrapAtMdWidth
            />
          );
        })
      ) : (
        <EmptyState message="Sorry it's a bit empty here. Please check out other product categories" />
      )}

      <Categories data={categoriesData} />
      <AudioGear
        data={audioGearData}
        screenSize={screenSize}
        classExtension="pb-32"
      />
    </div>
  );
}

export default Category;
