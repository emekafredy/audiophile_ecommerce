import PropTypes from 'prop-types';

function Features({ features, includes }) {
  return (
    <div className="bg-white-200 pt-32">
      <div
        className="flex
          sm-max:flex-col md-min:flex-row sm-max:gap-12 md-min:gap-28
          sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto"
      >
        <div className="md-min:w-[55%]">
          <h2
            className="uppercase font-bold text-black-200 leading-26
              sm-max:text-lg md-min:text-2xl sm-max:tracking-xs md-min:tracking-sm py-4"
          >
            Features
          </h2>

          <p className="font-regular text-black-200 opacity-50 text-smii leading-25">
            {features}
          </p>
        </div>

        <div className="md-min:w-[40%] xs-max:block sm-min:flex md-min:block">
          <h2
            className="uppercase font-bold text-black-200 leading-26
              sm-max:text-lg md-min:text-2xl sm-max:tracking-xs md-min:tracking-sm py-4
              xs-max:w-[100%] sm-min:w-[45%] md-min:w-[100%]"
          >
            In The Box
          </h2>

          <ul className="sm-max:py-4 md-min:py-0 xs-max:w-[100%] sm-min:w-[45%] md-min:w-[100%]">
            {includes?.map((inc) => {
              return (
                <li key={inc.item}>
                  <span className="font-bold text-orange-200 leading-25 text-smii sm-max:mr-4 md-min:mr-6">
                    {inc.quantity}x
                  </span>
                  <span className="font-regular text-black-200 leading-25 sm-max:text-xs md-min:text-smii mr-6 opacity-50">
                    {inc.item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

Features.propTypes = {
  features: PropTypes.string.isRequired,
  includes: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Features;
