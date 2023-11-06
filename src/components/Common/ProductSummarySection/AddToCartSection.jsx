import PropTypes from 'prop-types';
import { Button } from '..';
import { formatAndSeparateNumber } from '../../../helpers';
import { QuantityCounter } from '../Form';

function AddToCartSection({
  btnTitle,
  price,
  quantity,
  setQuantity,
  productQuantity,
}) {
  const inStock = productQuantity > 0;
  return (
    <div className="mt-12">
      <p className="py-4 text-md font-bold leading-25 tracking-sm">
        $ {` ${formatAndSeparateNumber(price)}`}
      </p>

      <div className="flex gap-4">
        <QuantityCounter
          quantity={quantity}
          setQuantity={setQuantity}
          productQuantity={productQuantity}
        />

        <Button
          primary
          uppercase
          content={btnTitle}
          onClick={() => true}
          disabled={!inStock}
        />
      </div>

      <span
        className={`text-xs ${
          inStock > 0 ? 'text-black-100' : 'text-red-100'
        } font-bold opacity-50`}
      >
        {inStock > 0
          ? `In stock: ${productQuantity}`
          : 'Out of stock'}
      </span>
    </div>
  );
}

AddToCartSection.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  productQuantity: PropTypes.number.isRequired,
};

export default AddToCartSection;
