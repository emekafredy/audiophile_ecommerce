import PropTypes from 'prop-types';
import ImageCard from '../ImageCard';
import DetailsCard from './DetailsCard';

function ProductDetailsSection({
  hasCTA,
  cta,
  isEven,
  newProduct,
  data,
  screenSize,
  extraClasses,
}) {
  return (
    <div
      className={`bg-white-200 ${extraClasses}`}
    >
      <div
        className="flex flex-wrap items-center justify-between
          sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto"
      >
        <div
          className={`md-max:order-2 ${
            isEven ? 'lg-min:order-2' : ''
          } md-max:text-center
          md-max:w-[100%] lg-min:w-[46%] sm-max:px-8 md-min:px-20 lg-min:px-0`}
        >
          <DetailsCard
            hasCTA={hasCTA}
            cta={cta}
            newProduct={newProduct}
            data={data}
          />
        </div>

        <ImageCard
          classes={`md-max:order-1 ${
            isEven ? 'lg-min:order-1' : ''
          } md-max:mb-12 md-max:w-[100%] lg-min:w-[46%]`}
          data={data}
          screenSize={screenSize}
        />
      </div>
    </div>
  );
}

ProductDetailsSection.propTypes = {
  hasCTA: PropTypes.bool.isRequired,
  isEven: PropTypes.bool.isRequired,
  newProduct: PropTypes.bool.isRequired,
  cta: PropTypes.string,
  data: PropTypes.shape({
    categoryImage: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    name2: PropTypes.string,
    name3: PropTypes.string,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
  extraClasses: PropTypes.string.isRequired,
};

ProductDetailsSection.defaultProps = {
  cta: '',
};

export default ProductDetailsSection;
