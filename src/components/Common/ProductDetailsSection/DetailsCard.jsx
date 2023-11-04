import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

function DetailsCard({
  hasCTA,
  cta,
  newProduct,
  data,
}) {
  return (
    <>
      {newProduct && (
        <p className="text-sm font-regular leading-19 text-orange-200 tracking-xl uppercase mb-4">
          New Product
        </p>
      )}
      <p
        className="xs-max:text-lg sm-min:text-xl md-min:text-2xl lg-min:text-2xl xl-min:text-3xl
            font-bold uppercase sm-max:leading-38 md-min:leading-44 sm-max:tracking-xs md-min:tracking-sm mb-6"
      >
        {data.name}{' '}
        <span className="text-orange-200">
          {data.name2}
        </span>{' '}
        {data.name3}
      </p>

      <p className="text-smii font-regular leading-25 text-black-200 opacity-50">
        {data.description}
      </p>

      {hasCTA && (
        <Button
          primary
          uppercase
          content={
            <Link
              to={`/${data.slug}`}
              className="uppercase text-xs font-bold leading-19"
            >
              {cta}
            </Link>
          }
          extraClasses="mt-8"
        />
      )}
    </>
  );
}

DetailsCard.propTypes = {
  cta: PropTypes.string,
  hasCTA: PropTypes.bool.isRequired,
  newProduct: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    name2: PropTypes.string,
    name3: PropTypes.string,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

DetailsCard.defaultProps = {
  cta: '',
};

export default DetailsCard;
