import PropTypes from 'prop-types';

function CategoryHeader({ category }) {
  return (
    <div className="flex items-center justify-center bg-black-100 py-24">
      <p
        className="font-bold sm-max:text-xl md-min:text-3xl uppercase
          sm-max:leading-28 md-min:leading-44 sm-max:tracking-lg md-min:tracking-md text-white-100"
      >
        {category}
      </p>
    </div>
  );
}

CategoryHeader.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryHeader;
