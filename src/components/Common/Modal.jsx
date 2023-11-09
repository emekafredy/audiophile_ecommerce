import PropTypes from 'prop-types';

function Modal({ children, onOverlayClick, modalStyles, centered }) {
  function onModalClick(e) {
    e.stopPropagation();
  }

  return (
    <>
      <div
        className={`${
          centered ? 'flex justify-center items-center' : ''
        } overflow-x-hidden
          overflow-y-auto fixed inset-0 z-[1005] outline-none focus:outline-none rounded`}
        onClick={onOverlayClick}
        onKeyDown={onOverlayClick}
        role="button"
        tabIndex={-1}
      >
        <div className="relative lg-max:w-[93%] xl-min:w-[1100px] 2xl-min:w-[1250px] m-auto">
          <div
            className={modalStyles}
            onClick={onModalClick}
            onKeyDown={onOverlayClick}
            role="button"
            tabIndex={-2}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-[1001] bg-black-200" />
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onOverlayClick: PropTypes.func,
  modalStyles: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};

Modal.defaultProps = {
  onOverlayClick: () => {},
  centered: false,
};

export default Modal;
