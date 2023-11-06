import { useState } from 'react';
import { useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';
import useFetchProduct from '../../hooks/useFetchProduct';
import {
  Categories,
  Spinner,
  AudioGear,
} from '../../components/Common';
import { getProductsState } from '../../store/slices/product';
import ProductSummarySection from '../../components/Common/ProductSummarySection';
import { categoriesData, audioGearData } from '../../data';
import {
  Features,
  Images,
  OtherProducts,
} from '../../components/ProductDetails';

function Product() {
  const { screenSize } = useScreenSize();
  const { loading } = useFetchProduct();
  const { product } = useSelector(getProductsState);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ProductSummarySection
            key={product.id}
            btnTitle="Add to Cart"
            isEven
            newProduct={product.new}
            name={product.name}
            description={product.description}
            slug={product.slug}
            image={product.image}
            screenSize={screenSize}
            classExtension="pt-32"
            price={product.price}
            cartSection
            quantity={quantity}
            setQuantity={setQuantity}
            productQuantity={product.quantity}
          />

          <Features
            features={product.features}
            includes={product.includes}
          />

          <Images
            gallery={product.gallery}
            screenSize={screenSize}
            name={product.name}
          />

          <OtherProducts
            otherProducts={product.others}
            screenSize={screenSize}
          />
        </>
      )}

      <Categories data={categoriesData} />
      <AudioGear
        data={audioGearData}
        screenSize={screenSize}
        classExtension="pb-32"
      />
    </>
  );
}

export default Product;
