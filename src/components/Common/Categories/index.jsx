import { Link } from 'react-router-dom';

import Button from '../../Button';
import ArrowRightIcon from '../../../assets/shared/desktop/icon-arrow-right.svg';
import categoriesData from './data';

function Categories() {
  return (
    <div className="bg-white-200 py-52">
      <div
        className="grid sm-max:grid-cols-1 md-min:grid-cols-3
          sm-max:gap-32 md-min:gap-2 lg-min:gap-4 xl-min:gap-10
          sm-max:w-[90%] md-min:w-[88%] lg-min:w-[77%] m-auto xs-min:px-0 sm-min:px-20 md-min:px-0"
      >
        {categoriesData.map((category) => {
          return (
            <div
              key={category.id}
              className="text-center bg-gray-100 rounded-lg"
            >
              <img
                src={category.imagePath}
                className="sm-max:w-64 md-min:w-48 lg-min:w-52 xl-min:w-64 md-min:h-[80%] lg-min:h-[80%] xl-min:h-[90%]
                  m-auto sm-max:-mt-20 md-min:-mt-16 lg-min:-mt-18 xl-min:-mt-20 text-center"
                alt="headphones"
              />
              <p className="uppercase text-md font-bold leading-25 tracking-sm mb-2">
                {category.name}
              </p>
              <Button
                noBorder
                hasIcon
                content={
                  <Link
                    to={`/${category.name}`}
                    className="uppercase text-xs font-bold leading-19 text-black-200 opacity-50 mr-2 hover:text-orange-200 hover:opacity-100"
                  >
                    Shop
                  </Link>
                }
                rightIcon={<img src={ArrowRightIcon} alt="arrow-right" />}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;