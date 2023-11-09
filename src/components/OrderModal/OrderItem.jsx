import PropTypes from 'prop-types';
import { formatAndSeparateNumber } from '../../helpers';
import imagePaths from '../../data/cart.json';

function OrderItem({ item }) {
  return (
    <div className="flex gap-2 justify-between mb-4">
      <div className="flex justify-start gap-2">
        <img
          src={imagePaths[`${item.slug}`]}
          className="w-[70px] -mt-3 rounded-lg"
          alt={item.slug}
        />

        <div>
          <p className="font-bold text-xs leading-25 text-black-200">
            {item.name}
          </p>
          <p className="font-bold text-xs leading-25 text-black-200 opacity-50">
            $ {` ${formatAndSeparateNumber(item.totalPrice)}`}
          </p>
        </div>
      </div>

      <p className="font-bold text-xs leading-25 text-black-200 opacity-50">
        {item.quantity}x
      </p>
    </div>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderItem;
