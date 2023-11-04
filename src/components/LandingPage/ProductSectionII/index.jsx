import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../Common/Button';

function ProductSectionII({ data, screenSize }) {
  return (
    <div className="bg-white-200 pb-12">
      <div
        className="rounded-lg
        md-max:bg-cover lg-min:bg-[75%] xl-min:bg-cover
        sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto h-[320px]"
      >
        <img
          src={data.image[`${screenSize}`]}
          alt={data.image.alt}
          className="w-full h-[320px] rounded-lg"
        />
        <div className="-mt-48 xs-max:ml-6 sm-min:ml-12 md-min:ml-20 xl-min:ml-24 2xl-min:ml-40">
          <p className="xs-max:text-lg sm-min:text-xl font-bold uppercase leading-38 tracking-lg mb-6">
            {data.title}
          </p>
          <Button
            transparentBlack
            hasIcon
            content={
              <Link
                to={`/${data.cta.link}`}
                className="uppercase text-xs font-bold leading-19"
              >
                {data.cta.title}
              </Link>
            }
          />
        </div>
      </div>
    </div>
  );
}

ProductSectionII.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    cta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default ProductSectionII;
