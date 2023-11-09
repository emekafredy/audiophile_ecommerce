import PropTypes from 'prop-types';
import { calculateFees } from '../../helpers';

function FeeSummaries({ title, price }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <h3 className="font-regular text-xs text-black-200 leading-25 uppercase opacity-50">
        {title}
      </h3>
      <p className="font-bold text-sm  text-black-200 leading-25">
        ${price}
      </p>
    </div>
  );
}

function Fees({ cart, checkoutMode }) {
  const { totalPrice, shipping, vat, grandTotal } =
    calculateFees(cart);

  return (
    <div className="mt-12">
      <div className={`${checkoutMode ? '' : 'my-4'}`}>
        <FeeSummaries title="Total" price={totalPrice} />
      </div>

      {checkoutMode && (
        <>
          <FeeSummaries title="Shipping" price={shipping} />
          <FeeSummaries title="VAT (Included)" price={vat} />

          <div className="my-8">
            <FeeSummaries title="Grand Total" price={grandTotal} />
          </div>
        </>
      )}
    </div>
  );
}

FeeSummaries.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

Fees.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  checkoutMode: PropTypes.bool,
};

Fees.defaultProps = {
  checkoutMode: false,
};

export default Fees;
