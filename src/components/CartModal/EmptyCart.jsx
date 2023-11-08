import CartIcon from '../../assets/shared/desktop/empty-cart.svg';

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-60 font-bold">
      <img src={CartIcon} alt="cart-icon" />
      <p className="text-black-200 opacity-75 text-sm">
        Your shopping cart is empty
      </p>
    </div>
  );
}

export default EmptyCart;
