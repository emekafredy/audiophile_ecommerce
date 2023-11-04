import PropTypes from 'prop-types';

function AudioGear({ data, screenSize }) {
  return (
    <div className="bg-white-200 pb-48 pt-30">
      <div
        className="flex flex-wrap items-center justify-between
          sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto"
      >
        <div
          className="md-max:order-2 md-max:text-center
          md-max:w-[100%] lg-min:w-[46%] sm-max:px-8 md-min:px-20 lg-min:px-0"
        >
          <p
            className="xs-max:text-lg sm-min:text-xl md-min:text-2xl lg-min:text-2xl xl-min:text-3xl
            font-bold uppercase sm-max:leading-38 md-min:leading-44 sm-max:tracking-xs md-min:tracking-sm mb-6"
          >
            {data.subTitle1}{' '}
            <span className="text-orange-200">{data.subTitle2}</span>{' '}
            {data.subTitle3}
          </p>

          <p className="text-smii font-regular leading-25 text-black-200 opacity-50">
            {data.description}
          </p>
        </div>

        <div
          className="md-max:order-1 md-max:mb-12
          md-max:w-[100%] lg-min:w-[46%]"
        >
          <img
            src={data.image[`${screenSize}`]}
            className="h-auto w-full rounded-lg"
            alt={data.image.alt}
          />
        </div>
      </div>
    </div>
  );
}

AudioGear.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    subTitle1: PropTypes.string.isRequired,
    subTitle2: PropTypes.string.isRequired,
    subTitle3: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default AudioGear;
