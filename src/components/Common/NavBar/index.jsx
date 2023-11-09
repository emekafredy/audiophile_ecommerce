import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../../assets/shared/desktop/logo.svg';
import HamburgerIcon from '../../../assets/shared/tablet/icon-hamburger.svg';
import CloseIcon from '../../../assets/shared/tablet/icon-close.svg';
import CartIcon from '../../../assets/shared/desktop/icon-cart.svg';
import { categoriesData, menuItems } from '../../../data';
import { setActiveLinkColor, totalInCart } from '../../../helpers';
import CartModal from '../../Cart';
import useFetchCart from '../../../hooks/useFetchCart';
import { getCartState } from '../../../store/slices/cart';
import MobileMenu from './MobileMenu';

function NavBar({ prodCategory, setProdCategory }) {
  const [showCartModal, setShowCartModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <nav
        className="lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px]
          m-auto flex justify-between items-center py-8"
      >
        <div className="md-min:hidden flex justify-between items-center transition-all duration-500">
          <div
            role="button"
            tabIndex="-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            onKeyDown={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <img
              src={mobileMenuOpen ? CloseIcon : HamburgerIcon}
              alt="menu"
              className="mr-10 w-6"
            />
          </div>
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
                to={
                  item.title === 'home'
                    ? '/'
                    : `/category/${item.title}`
                }
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

        <div
          role="button"
          onClick={() => setShowCartModal(true)}
          onKeyDown={() => setShowCartModal(true)}
          tabIndex={-3}
        >
          <img src={CartIcon} alt="cart-icon" className="flex-1" />
          {cart.length > 0 && (
            <span
              className="absolute -mt-7 ml-4 rounded-full bg-orange-200 px-[0.50em] py-[0.25em]
              text-xs font-bold leading-none text-white-100"
            >
              {totalInCart(cart, 'quantity')}
            </span>
          )}
        </div>
      </nav>
      <div
        className="lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto
          border-b border-white-100 opacity-10 md-min:opacity-20"
      />

      {showCartModal && (
        <CartModal
          setShowModal={setShowCartModal}
          loading={loading}
          cart={cart}
        />
      )}

      <div
        className={`md-min:hidden absolute inset-0 h-[100px] bg-white-100 ${
          mobileMenuOpen ? '-top-[100%]' : '-top-[1600%]'
        } w-[98%] m-auto transition-all duration-500 mt-[12rem] z-[1210]`}
      >
        <MobileMenu data={categoriesData} />
      </div>
      <div
        className={`md-min:hidden opacity-60 fixed inset-0 z-[1001] bg-black-200  ${
          mobileMenuOpen ? 'top-[11%]' : 'top-[100%]'
        } transition-all duration-500`}
      />
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
