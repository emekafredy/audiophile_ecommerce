import PropTypes from 'prop-types';

function ImageCard({ styles, slug, image, screenSize }) {
  return (
    <div className={styles}>
      <img
        src={image[`${screenSize}`]}
        className="h-auto w-full rounded-lg"
        alt={slug}
      />
    </div>
  );
}

ImageCard.propTypes = {
  styles: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.shape({
    desktop: PropTypes.string.isRequired,
    tablet: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default ImageCard;
