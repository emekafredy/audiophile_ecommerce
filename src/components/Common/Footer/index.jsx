import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../../public/shared/desktop/logo.svg';
import { menuItems, footerData } from '../../../data';
import Socials from './Socials';
import { setActiveLinkColor } from '../../../helpers';

function Footer({ prodCategory }) {
  const { category } = useParams();

  return (
    <footer
      className="
        z-[1000]
        bg-black-100
        text-white-100
        w-full"
    >
      <div className="sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto">
        <div className="flex flex-col xs-max:items-center sm-min:items-start">
          <div className="h-1 w-24 bg-orange-200" />
        </div>
        <div className="xs-max:text-center md-min:flex md-min:justify-between md-min:items-center mt-8 mb-6">
          <Link to="/">
            <img
              src={Logo}
              alt="app-logo"
              className="xs-max:m-auto xs-max:mb-4 py-8"
            />
          </Link>

          <ul className="md-min:py-8">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="xs-max:block sm-min:inline font-semibold text-xs xs-max:mb-4"
              >
                <Link
                  to={item.title === 'home' ? '/' : `/${item.title}`}
                  className={`sm-min:mr-4 md-min:mr-0 md-min:ml-4 lg-min:ml-6 xl-min:ml-16
                    uppercase ${setActiveLinkColor(
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
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="md-max:w-[100%] lg-min:w-[50%] xs-max:text-center sm-min:text-left">
            <p className="font-regular text-smii leading-25 text-white-100 opacity-50 md-max:mb-6 lg-min:mb-12">
              {footerData.body}
            </p>
            <p className="font-bold text-smii leading-25 text-white-100 opacity-50 md-max:hidden">
              {footerData.copyright}
            </p>
          </div>

          <Socials
            socials={footerData.smPlatforms}
            classes="w-[50%] text-right md-max:hidden"
          />
        </div>

        <div className="lg-min:hidden flex xs-max:flex-col sm-min:flex-row justify-between items-center mb-8">
          <div className="xs-max:w-[100%] sm-min:w-[50%] xs-max:text-center sm-min:text-left xs-max:mb-8">
            <p className="font-bold text-smii leading-25 text-white-100 opacity-50">
              {footerData.copyright}
            </p>
          </div>

          <Socials
            socials={footerData.smPlatforms}
            classes="xs-max:w-[100%] sm-min:w-[50%] xs-max:text-center sm-min:text-right"
          />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  prodCategory: PropTypes.string,
};

Footer.defaultProps = {
  prodCategory: '',
};

export default Footer;
