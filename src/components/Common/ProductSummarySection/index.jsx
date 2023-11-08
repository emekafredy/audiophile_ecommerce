import PropTypes from 'prop-types';
import { ImageCard } from '..';
import SummaryCard from './SummaryCard';

function ProductSummarySection({
  hasLink,
  btnTitle,
  isEven,
  newProduct,
  name,
  name2,
  name3,
  description,
  slug,
  image,
  screenSize,
  classExtension,
  wrapAtMdWidth,
  price,
  cartSection,
  productQuantity,
}) {
  return (
    <div className={classExtension}>
      <div
        className={`flex items-center justify-between
          ${
            wrapAtMdWidth
              ? 'md-max:flex-col lg-min:flex-row md-min:gap-8'
              : 'sm-max:flex-col md-min:flex-row sm-min:gap-8 md-min:gap-12 lg-min:gap-20'
          }
          sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto`}
      >
        <div
          className={`md-max:order-2 ${isEven ? 'lg-min:order-2' : ''}
          flex-1 ${
            wrapAtMdWidth
              ? 'sm-min:px-8 md-min:px-20 lg-min:px-0 md-max:text-center'
              : ''
          }`}
        >
          <SummaryCard
            hasLink={hasLink}
            btnTitle={btnTitle}
            newProduct={newProduct}
            name={name}
            name2={name2}
            name3={name3}
            description={description}
            slug={slug}
            price={price}
            cartSection={cartSection}
            productQuantity={productQuantity}
          />
        </div>

        <ImageCard
          styles={`md-max:order-1 ${
            isEven ? 'lg-min:order-1' : ''
          } md-max:mb-12 flex-1`}
          image={image}
          slug={slug}
          screenSize={screenSize}
        />
      </div>
    </div>
  );
}

ProductSummarySection.propTypes = {
  hasLink: PropTypes.bool,
  isEven: PropTypes.bool.isRequired,
  newProduct: PropTypes.bool.isRequired,
  btnTitle: PropTypes.string,
  name: PropTypes.string.isRequired,
  name2: PropTypes.string,
  name3: PropTypes.string,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.shape({
    desktop: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
  classExtension: PropTypes.string.isRequired,
  wrapAtMdWidth: PropTypes.bool,
  price: PropTypes.number,
  cartSection: PropTypes.bool,
  productQuantity: PropTypes.number,
};

ProductSummarySection.defaultProps = {
  hasLink: false,
  btnTitle: '',
  name2: '',
  name3: '',
  wrapAtMdWidth: false,
  price: 0,
  cartSection: false,
  productQuantity: 0,
};

export default ProductSummarySection;
