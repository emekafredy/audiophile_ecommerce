import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Common';

function OtherProducts({ otherProducts, screenSize }) {
  const navigate = useNavigate();
  return (
    <div className="pt-32 text-center">
      <h2
        className="uppercase font-bold text-black-200 leading-26
              sm-max:text-lg md-min:text-2xl sm-max:tracking-xs md-min:tracking-sm pb-12"
      >
        You may also like
      </h2>

      <div
        className="flex sm-max:flex-col md-min:flex-row sm-max:gap-20 md-min:gap-4 lg-min:gap-8 items-center justify-between
          lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto"
      >
        {otherProducts?.map((prod) => {
          return (
            <div key={prod.slug} className="w-[100%]">
              <img
                src={prod.image[`${screenSize}`]}
                className="h-auto w-full rounded-lg"
                alt={prod.slug}
              />

              <p className="uppercase text-lg font-bold leading-33 text-black-200 tracking-md my-8">
                {prod.name}
              </p>

              <Button
                primary
                uppercase
                paddedX
                content="See Product"
                handleClick={() => navigate(`/product/${prod.slug}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

OtherProducts.propTypes = {
  otherProducts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.shape({
        desktop: PropTypes.string.isRequired,
        tablet: PropTypes.string.isRequired,
        mobile: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default OtherProducts;
