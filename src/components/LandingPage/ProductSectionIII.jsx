import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Common';

function ProductSectionIII({ data, screenSize }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white-200 pb-12">
      <div
        className="grid xs-max:grid-cols-1 sm-min:grid-cols-2
          xs-max:gap-4 sm-min:gap-2 md-min:gap-4 lg-min:gap-12 xl-min:gap-16 2xl-min:gap-24
          lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto"
      >
        <div className="sm-max:h-[200px] md-min:h-[320px]">
          <img
            src={data.image[`${screenSize}`]}
            className="w-full sm-max:h-[200px] md-min:h-[320px] rounded-lg"
            alt={data.slug}
          />
        </div>
        <div
          className="sm-max:h-[200px] md-min:h-[320px] bg-gray-100 rounded-lg
            xs-max:pl-4 sm-min:pl-4 sm-min:pl-4 md-min:pl-8 lg-min:pl-12 xl-min:pl-16 2xl-min:pl-20
            sm-max:pt-12 md-min:pt-20"
        >
          <p className="sm-min:text-md md-min:text-xl font-bold uppercase leading-38 tracking-lg mb-6">
            {data.name}
          </p>
          <Button
            transparentBlack
            hasIcon
            paddedX
            content={data.cta}
            handleClick={() => navigate(`/product/${data.slug}`)}
          />
        </div>
      </div>
    </div>
  );
}

ProductSectionIII.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    image: PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default ProductSectionIII;
