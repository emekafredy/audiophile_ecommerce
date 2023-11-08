import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatAndSeparateNumber } from '../../helpers';
import imagePaths from '../../data/cart.json';
import { QuantityCounter } from '../Common/Form';

function CartItem({ item }) {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(item?.quantity || 0);

  return (
    <div className="flex gap-2 items-center justify-between mb-6">
      <div className="flex items-center justify-start gap-4">
        <img
          src={imagePaths[`${item.slug}`]}
          className="w-[30%] rounded-lg"
          alt={item.slug}
        />

        <div>
          <p className="font-bold font-sm leading-25 text-black-200">
            {item.name}
          </p>
          <p className="font-bold font-xs leading-25 text-black-200 opacity-50">
            $ {` ${formatAndSeparateNumber(item.totalPrice)}`}
          </p>
        </div>
      </div>

      <QuantityCounter
        quantity={quantity}
        setQuantity={setQuantity}
        productQuantity={item.maxQuantity}
        loading={loading}
        setLoading={setLoading}
        itemQuantity={item?.quantity}
        price={item.unitPrice}
        name={item.name}
        slug={item.slug}
      />
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    maxQuantity: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
