import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '..';
import ArrowRightIcon from '../../../assets/shared/desktop/icon-arrow-right.svg';

function MobileMenu({ data }) {
  const navigate = useNavigate();

  function navigateCategory(name) {
    navigate(`/category/${name}`);
  }

  return (
    <div className="bg-white-200 pt-12 pb-24 md-min:hidden h-[800px] rounded-b-lg">
      <div
        className="flex flex-col gap-12 items-center justify-between text-center
          w-[100%] m-auto sm-min:px-4"
      >
        {data?.map((category) => {
          return (
            <div
              key={category.id}
              role="button"
              tabIndex={Number(category.id)}
              className="text-center bg-gray-100 rounded-lg text-black-200
                hover:text-orange-200 hover:opacity-100 cursor-pointer w-[400px] h-[200px]"
              onClick={() => navigateCategory(category.name)}
              onKeyDown={() => navigateCategory(category.name)}
            >
              <img
                src={category.image}
                className="w-40 h-[70%] m-auto -mt-8 text-center"
                alt={category.alt}
              />
              <p className="uppercase text-md font-bold tracking-sm mb-2 text-black-200 hover:text-black-200">
                {category.name}
              </p>
              <Button
                hasIcon
                paddedX
                content={
                  <p className="uppercase text-xs font-bold mr-2 opacity-70">
                    Shop
                  </p>
                }
                rightIcon={
                  <img src={ArrowRightIcon} alt="arrow-right" />
                }
                classExtension="-mt-10"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MobileMenu;
