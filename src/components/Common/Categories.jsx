import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '.';
import ArrowRightIcon from '../../assets/shared/desktop/icon-arrow-right.svg';

function Categories({ data }) {
  const navigate = useNavigate();

  function navigateCategory(name) {
    navigate(`/category/${name}`);
  }

  return (
    <div className="bg-white-200 pt-52 pb-36">
      <div
        className="flex sm-max:flex-col md-min:flex-row sm-max:gap-32 md-min:gap-4 lg-min:gap-8 items-center justify-between
          lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto"
      >
        {data?.map((category) => {
          return (
            <div
              key={category.id}
              role="button"
              tabIndex={Number(category.id)}
              className="text-center bg-gray-100 rounded-lg text-black-200
            hover:text-orange-200 hover:opacity-100 cursor-pointer w-[100%]"
              onClick={() => navigateCategory(category.name)}
              onKeyDown={() => navigateCategory(category.name)}
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
                paddedX
                content={
                  <p className="uppercase text-xs font-bold leading-19 mr-2 opacity-70">
                    Shop
                  </p>
                }
                rightIcon={
                  <img src={ArrowRightIcon} alt="arrow-right" />
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
