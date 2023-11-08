import { Link } from 'react-router-dom';
import { Modal } from '../Common';

function OrderModal() {
  return (
    <Modal
      modalStyles="relative sm-max:w-[90%] md-min:w-[75%]
      lg-min:w-[60%] xl-min:w-[40%] 2xl-min:w-[30%] m-auto"
      centered
      cta={
        <Link to="/checkout" className="uppercase">
          Checkout
        </Link>
      }
    >
      <div className="bg-white-100 flex items-center justify-center p-8">
        <p>Hello there</p>
        <p>This is the cart section</p>
      </div>
    </Modal>
  );
}

export default OrderModal;
