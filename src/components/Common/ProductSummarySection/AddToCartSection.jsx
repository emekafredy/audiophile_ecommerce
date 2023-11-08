import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '..';
import {
  formatAndSeparateNumber,
  renderErrorMessage,
  productInCart,
} from '../../../helpers';
import { QuantityCounter } from '../Form';
import { getCartState, addToCart } from '../../../store/slices/cart';

function AddToCartSection({
  btnTitle,
  price,
  productQuantity,
  name,
  slug,
}) {
  const { cart } = useSelector(getCartState);
  const dispatch = useDispatch();

  const item = productInCart(cart, slug);

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(item?.quantity || 0);

  const inStock = productQuantity > 0;

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      const product = {
        price,
        name,
        slug,
        quantity: productQuantity,
      };

      await dispatch(addToCart(product));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      renderErrorMessage(err);
    }
  };

  return (
    <div className="mt-12">
      <p className="py-4 text-md font-bold leading-25 tracking-sm">
        $ {` ${formatAndSeparateNumber(price)}`}
      </p>

      <div className="flex gap-4">
        {(item?.quantity || 0) > 0 && (
          <QuantityCounter
            quantity={quantity}
            setQuantity={setQuantity}
            productQuantity={productQuantity}
            loading={loading}
            setLoading={setLoading}
            itemQuantity={item?.quantity}
            price={price}
            name={name}
            slug={slug}
            large
          />
        )}

        <Button
          primary
          uppercase
          content={btnTitle}
          handleClick={() => handleAddToCart()}
          disabled={!inStock}
          paddedX
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
  productQuantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default AddToCartSection;
