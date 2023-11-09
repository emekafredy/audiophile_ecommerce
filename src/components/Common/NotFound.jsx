import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import SadFaceIcon from '../../assets/shared/desktop/sad-face.svg';

function NotFound({ message }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center text-center h-[700px] bg-white-200 font-bold">
      <img src={SadFaceIcon} className="w-16" alt="cart-icon" />
      <h1 className="sm-max:text-[50px] md-min:text-[100px] text-orange-200">
        404
      </h1>
      <p className="text-black-200 opacity-75 sm-max:text-lg md-min:text-2xl mt-8">
        {message}
      </p>

      <Button
        primary
        uppercase
        paddedX
        rounded
        content="Visit Home"
        handleClick={() => navigate('/')}
        classExtension="mt-8"
      />
    </div>
  );
}

NotFound.propTypes = {
  message: PropTypes.string,
};

NotFound.defaultProps = {
  message: 'Sorry! This Is Not What You Were Looking For.',
};

export default NotFound;
