import { Link } from 'react-router-dom';
import Logo from '../../../assets/shared/desktop/logo.svg';
import HamburgerIcon from '../../../assets/shared/tablet/icon-hamburger.svg';
import CartIcon from '../../../assets/shared/desktop/icon-cart.svg';

function NavBar() {
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
      <nav className="sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto flex justify-between items-center py-8">
        <div className="md-min:hidden flex justify-between items-center">
          <img src={HamburgerIcon} alt="menu" className="mr-10" />
          <Link to="/" className="xs-max:hidden">
            <img src={Logo} alt="app-logo" />
          </Link>
        </div>

        <Link to="/" className="xs-max:block sm-min:hidden md-min:block">
          <img src={Logo} alt="app-logo" />
        </Link>

        <ul className="sm-max:hidden">
          {['Home', 'Headphones', 'Speakers', 'Earphones'].map((item) => (
            <li key={item} className="inline font-semibold text-xs">
              <Link
                to={`/${item}`}
                className="md-min:mx-2 lg-min:mx-3 xl-min:mx-8 uppercase text-white-100 hover:text-orange-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/cart" className="">
          <img src={CartIcon} alt="app-logo" />
        </Link>
      </nav>
      <div className="sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto border-b border-white-100 opacity-10 md-min:opacity-20" />
    </div>
  );
}

export default NavBar;
