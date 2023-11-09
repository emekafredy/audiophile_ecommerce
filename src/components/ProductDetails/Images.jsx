import PropTypes from 'prop-types';

function Images({ gallery, screenSize, name }) {
  return (
    <div className="pt-32">
      <div
        className="flex sm-max:flex-col md-min:flex-row gap-8 items-center justify-between
          lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto
          md-min:h-[500px] lg-min:h-[500px] xl-min:h-[600px] 2xl-min:h-[750px]"
      >
        <div className="sm-max:w-[100%] md-min:w-[45%] h-[100%]">
          <div className="flex flex-col gap-8 items-center justify-between md-min:h-[100%] lg-min:h-[95%] 2xl-min:h-[100%]">
            <img
              src={gallery.first[`${screenSize}`]}
              className="h-[50%] w-full rounded-lg mb"
              alt={`${name}-1`}
            />
            <img
              src={gallery.second[`${screenSize}`]}
              className="h-[50%] w-full rounded-lg"
              alt={`${name}-2`}
            />
          </div>
        </div>
        <div className="sm-max:w-[100%] md-min:w-[55%] h-[100%]">
          <img
            src={gallery.third[`${screenSize}`]}
            className="h-full w-full rounded-lg"
            alt={`${name}-3`}
          />
        </div>
      </div>
    </div>
  );
}

Images.propTypes = {
  gallery: PropTypes.shape({
    first: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
    second: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
    third: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Images;
