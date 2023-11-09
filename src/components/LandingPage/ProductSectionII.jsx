import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Common';

function ProductSectionII({ data, screenSize }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white-200 pb-12">
      <div
        className="rounded-lg
        md-max:bg-cover lg-min:bg-[75%] xl-min:bg-cover
        lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto h-[320px]"
      >
        <img
          src={data.image[`${screenSize}`]}
          alt={data.slug}
          className="w-full h-[320px] rounded-lg"
        />
        <div className="-mt-48 xs-max:ml-6 sm-min:ml-12 md-min:ml-20 xl-min:ml-24 2xl-min:ml-40">
          <p className="xs-max:text-lg sm-min:text-xl font-bold uppercase leading-38 tracking-lg mb-6">
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

ProductSectionII.propTypes = {
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

export default ProductSectionII;
