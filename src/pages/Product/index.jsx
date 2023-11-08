import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white-200">
          <div className="sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto pt-24 -mb-24">
            <span
              role="button"
              className="text-smii font-regular leading-25 text-black-200 opacity-50"
              onClick={() => navigate(-1)}
              onKeyDown={() => navigate(-1)}
              tabIndex={-4}
            >
              Go Back
            </span>
          </div>

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
        </div>
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
