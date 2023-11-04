import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../Button';
import ArrowRightIcon from '../../../public/shared/desktop/icon-arrow-right.svg';

function Categories({ data }) {
  const navigate = useNavigate();

  function navigateCategory(name) {
    navigate(`/${name}`);
  }

  return (
    <div className="bg-white-200 pt-52 pb-36">
      <div
        className="grid sm-max:grid-cols-1 md-min:grid-cols-3
          sm-max:gap-32 md-min:gap-2 lg-min:gap-4 xl-min:gap-10
          sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto xs-min:px-0 sm-min:px-20 md-min:px-0"
      >
        {data.map((category) => {
          return (
            <div
              role="button"
              tabIndex={Number(category.id)}
              key={category.id}
              className="text-center bg-gray-100 rounded-lg text-black-200
                hover:text-orange-200 hover:opacity-100 cursor-pointer"
              onClick={() =>
                navigateCategory(category.name)
              }
              onKeyDown={() =>
                navigateCategory(category.name)
              }
            >
              <img
                src={category.image}
                className="sm-max:w-64 md-min:w-48 lg-min:w-52 xl-min:w-64 md-min:h-[80%] lg-min:h-[80%] xl-min:h-[90%]
                  m-auto sm-max:-mt-20 md-min:-mt-16 lg-min:-mt-18 xl-min:-mt-20 text-center"
                alt={category.alt}
              />
              <p className="uppercase text-md font-bold leading-25 tracking-sm mb-2 text-black-200 hover:text-black-200">
                {category.name}
              </p>
              <Button
                hasIcon
                content={
                  <p className="uppercase text-xs font-bold leading-19 mr-2 opacity-70">
                    Shop
                  </p>
                }
                rightIcon={
                  <img
                    src={ArrowRightIcon}
                    alt="arrow-right"
                  />
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

Categories.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Categories;
