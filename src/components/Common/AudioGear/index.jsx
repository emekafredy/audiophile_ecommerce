import PropTypes from 'prop-types';
import ProductDetailsSection from '../ProductDetailsSection';

function AudioGear({
  data,
  screenSize,
  extraClasses,
}) {
  return (
    <ProductDetailsSection
      hasCTA={false}
      isEven={false}
      newProduct={false}
      data={data}
      screenSize={screenSize}
      extraClasses={extraClasses}
    />
  );
}

AudioGear.propTypes = {
  data: PropTypes.shape({
    categoryImage: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    name2: PropTypes.string.isRequired,
    name3: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
  extraClasses: PropTypes.string.isRequired,
};

export default AudioGear;
