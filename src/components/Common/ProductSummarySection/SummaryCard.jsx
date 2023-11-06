import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '..';
import AddToCartSection from './AddToCartSection';

function SummaryCard({
  hasLink,
  btnTitle,
  newProduct,
  name,
  name2,
  name3,
  description,
  slug,
  price,
  cartSection,
  quantity,
  setQuantity,
  productQuantity,
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
        {name} <span className="text-orange-200">{name2}</span>{' '}
        {name3}
      </p>

      <p className="text-smii font-regular leading-25 text-black-200 opacity-50">
        {description}
      </p>

      {hasLink && (
        <Button
          primary
          uppercase
          content={
            <Link
              to={`/product/${slug}`}
              className="uppercase text-xs font-bold leading-19"
            >
              {btnTitle}
            </Link>
          }
          classExtension="mt-8"
        />
      )}

      {cartSection && (
        <AddToCartSection
          btnTitle={btnTitle}
          price={price}
          quantity={quantity}
          setQuantity={setQuantity}
          productQuantity={productQuantity}
        />
      )}
    </>
  );
}

SummaryCard.propTypes = {
  btnTitle: PropTypes.string,
  hasLink: PropTypes.bool,
  newProduct: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  name2: PropTypes.string,
  name3: PropTypes.string,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number,
  cartSection: PropTypes.bool,
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  productQuantity: PropTypes.number,
};

SummaryCard.defaultProps = {
  hasLink: false,
  btnTitle: '',
  name2: '',
  name3: '',
  price: 0,
  cartSection: false,
  quantity: 1,
  setQuantity: () => {},
  productQuantity: 0,
};

export default SummaryCard;
