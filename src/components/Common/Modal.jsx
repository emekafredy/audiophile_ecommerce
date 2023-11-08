import PropTypes from 'prop-types';

function Modal({ children, setShowModal, modalStyles, centered }) {
  function onOverlayClick(e) {
    setShowModal(false);
    e.stopPropagation();
  }

  function onModalClick(e) {
    e.stopPropagation();
  }

  return (
    <>
      <div
        className={`${
          centered ? 'flex justify-center items-center' : ''
        } overflow-x-hidden
          overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded`}
        onClick={onOverlayClick}
        onKeyDown={onOverlayClick}
        role="button"
        tabIndex={-1}
      >
        <div className="relative sm-max:w-[90%] md-min:w-[88%] lg-min:w-[70%] m-auto">
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
      <div className="opacity-60 fixed inset-0 z-40 bg-black-200" />
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  setShowModal: PropTypes.func,
  modalStyles: PropTypes.string.isRequired,
  centered: PropTypes.bool,
};

Modal.defaultProps = {
  setShowModal: () => {},
  centered: false,
};

export default Modal;
