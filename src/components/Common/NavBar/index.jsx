import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../../assets/shared/desktop/logo.svg';
import HamburgerIcon from '../../../assets/shared/tablet/icon-hamburger.svg';
import CartIcon from '../../../assets/shared/desktop/icon-cart.svg';
import { menuItems } from '../../../data';
import { setActiveLinkColor, totalInCart } from '../../../helpers';
import CartModal from '../../CartModal';
import useFetchCart from '../../../hooks/useFetchCart';
import { getCartState } from '../../../store/slices/cart';

function NavBar({ prodCategory, setProdCategory }) {
  const [showCartModal, setShowCartModal] = useState(false);
  const { category } = useParams();
  const { loading } = useFetchCart();
  const { cart } = useSelector(getCartState);

  useEffect(() => {
    setProdCategory(category);
  }, [category, setProdCategory]);

  return (
    <div
      className="
        h-[6rem]
        fixed
        top-0
        z-[1000]
        bg-black-100
        text-white-100
        w-full"
    >
      <nav className="sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto flex justify-between items-center py-8">
        <div className="md-min:hidden flex justify-between items-center">
          <img src={HamburgerIcon} alt="menu" className="mr-10" />
          <Link to="/" className="xs-max:hidden">
            <img src={Logo} alt="app-logo" />
          </Link>
        </div>

        <Link
          to="/"
          className="xs-max:block sm-min:hidden md-min:block"
        >
          <img src={Logo} alt="app-logo" />
        </Link>

        <ul className="sm-max:hidden">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="inline font-semibold text-xs"
            >
              <Link
                to={item.title === 'home' ? '/' : `/${item.title}`}
                className={`md-min:mx-2 lg-min:mx-3 xl-min:mx-8 uppercase
                  ${setActiveLinkColor(
                    item.title,
                    category,
                    prodCategory,
                  )} hover:text-orange-200 transition-all duration-500`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <span
          role="button"
          onClick={() => setShowCartModal(true)}
          onKeyDown={() => setShowCartModal(true)}
          tabIndex={-3}
        >
          {cart.length > 0 && (
            <div
              className="absolute top-5 bg-orange-200 rounded-full p-2
            xs-max:right-[2%] sm-min:right-[3%] md-min:right-[4.5%] lg-min:right-[13.6%] xl-min:right-[14%] 2xl-min:right-[14.1%]"
            >
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-xxs text-white-100 p-1">
                {totalInCart(cart)}
              </p>
            </div>
          )}
          <img src={CartIcon} alt="cart-icon" />
        </span>
      </nav>
      <div className="sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto border-b border-white-100 opacity-10 md-min:opacity-20" />

      {showCartModal && (
        <CartModal
          setShowModal={setShowCartModal}
          loading={loading}
          cart={cart}
        />
      )}
    </div>
  );
}

NavBar.propTypes = {
  prodCategory: PropTypes.string,
  setProdCategory: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  prodCategory: '',
};

export default NavBar;
