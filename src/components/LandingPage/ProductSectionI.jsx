import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Common';

function ProductSectionI({ data, screenSize }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white-200 pb-12">
      <div
        className="bg-orange-200 bg-[url('assets/home/desktop/pattern-circles.svg')] bg-no-repeat
          md-max:bg-p-md lg-min:bg-p-lg xl-min:bg-p-xl 2xl-min:bg-p-2xl
          md-max:bg-size-md lg-min:bg-size-lg xl-min:bg-size-xl 2xl-min:bg-size-auto
          lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto rounded-lg
          md-max:h-[720px] lg-min:h-[560px] overflow-hidden"
      >
        <div
          className="grid md-max:grid-cols-1 lg-min:grid-cols-2
          md-max:gap-12 lg-min:gap-2 2xl-min:gap-4 p-8"
        >
          <div className="text-center lg-min:pt-31 xl-min:pt-20">
            <img
              src={data.image[`${screenSize}`]}
              className="md-max:h-auto lg-min:h-104 xl-min:h-auto
                md-max:w-60 lg-min:w-82 xl-min:w-96 m-auto"
              alt={data.slug}
            />
          </div>

          <div
            className="sm-max:w-[100%] md-min:w-[60%] lg-min:w-[100%] xl-min:w-[85%] 2xl-min:w-[65%]
              md-max:m-auto md-max:text-center lg-min:my-auto
              md-max:py-8 lg-min:py-32 xs-max:px-2 sm-min:px-12"
          >
            <p
              className="text-white-100 font-bold uppercase xs-max:text-xl sm-min:text-3xl md-min:text-4xl
              sm-max:leading-33 md-min:leading-58 tracking-lg mb-4"
            >
              {data.name}
            </p>

            <p className="text-white-100 opacity-75 xs-max:text-xs sm-min:text-smii mb-6">
              {data.description}
            </p>
            <Button
              black
              hasIcon
              paddedX
              content={data.cta}
              handleClick={() => navigate(`/product/${data.slug}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ProductSectionI.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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

export default ProductSectionI;
