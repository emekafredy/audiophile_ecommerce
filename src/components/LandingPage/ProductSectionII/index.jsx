import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../Common/Button';

function ProductSectionII({ data, screenSize }) {
  return (
    <div className="bg-white-200 pb-12">
      <div
        className={`bg-speaker-2x7-${screenSize} bg-no-repeat bg-center rounded-lg pt-32
        xs-max:pl-6 sm-min:pl-12 md-min:pl-20 xl-min:pl-28
        md-max:bg-cover lg-min:bg-[75%] xl-min:bg-cover
        sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto h-[350px]`}
      >
        <p className="xs-max:text-lg sm-min:text-xl font-bold uppercase leading-38 tracking-lg mb-6">
          {data.title}
        </p>
        <Button
          transparentBlack
          hasIcon
          content={
            <Link
              to={`/${data.cta.title}`}
              className="uppercase text-xs font-bold leading-19"
            >
              {data.cta.title}
            </Link>
          }
        />
      </div>
    </div>
  );
}

ProductSectionII.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cta: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default ProductSectionII;
