import PropTypes from 'prop-types';

function ImageCard({
  classes,
  data,
  screenSize,
}) {
  return (
    <div className={classes}>
      <img
        src={data.categoryImage[`${screenSize}`]}
        className="h-auto w-full rounded-lg"
        alt={data.slug}
      />
    </div>
  );
}

ImageCard.propTypes = {
  classes: PropTypes.string.isRequired,
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    categoryImage: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default ImageCard;
