import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../Common';

function Hero({ data, screenSize }) {
  const navigate = useNavigate();
  return (
    <div className="bg-black-100">
      <div
        className="lg-min:flex lg-min:flex-wrap lg-min:items-center lg-min:justify-between
        md-max:bg-[url('assets/home/tablet/image-hero.png')] bg-no-repeat bg-cover bg-center
        lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto
        sm-max:h-[800px] md-min:h-[700px] lg-min:h-auto"
      >
        <div
          className="md-max:w-[100%] lg-min:w-[40%]
          md-max:text-center xs-max:px-12 sm-min:px-24 md-min:px-40 lg-min:px-0 lg-min:pb-36
          xs-max:pt-56 sm-min:pt-60 md-min:pt-40"
        >
          <p
            className="text-white-100 opacity-50 leading-19
            tracking-xl font-regular text-sm uppercase mb-6"
          >
            {data.name}
          </p>
          <p
            className="text-white-100 font-bold uppercase
            xs-max:text-xl sm-min:text-2xl md-min:text-3xl xl-min:text-4xl leading-58 tracking-lg mb-6"
          >
            {data.name2}
          </p>

          <p className="text-white-100 opacity-75 text-smii mb-8">
            {data.description}
          </p>
          <Button
            primary
            uppercase
            paddedX
            content={data.cta}
            handleClick={() => navigate(`/product/${data.slug}`)}
          />
        </div>

        <div className="md-max:hidden lg-min:w-[60%]">
          <img
            src={data.image[`${screenSize}`]}
            className="h-full w-full"
            alt={data.slug}
          />
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    name2: PropTypes.string.isRequired,
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

export default Hero;
