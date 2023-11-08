import PropTypes from 'prop-types';
import ProductSummarySection from './ProductSummarySection';

function AudioGear({ data, screenSize, classExtension }) {
  return (
    <div className="bg-white-200">
      <ProductSummarySection
        isEven={false}
        newProduct={false}
        data={data}
        name={data.name}
        name2={data.name2}
        name3={data.name3}
        description={data.description}
        slug={data.slug}
        image={data.image}
        screenSize={screenSize}
        classExtension={classExtension}
        wrapAtMdWidth
      />
    </div>
  );
}

AudioGear.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
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
  classExtension: PropTypes.string.isRequired,
};

export default AudioGear;
