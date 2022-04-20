import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/slice/modalSlice';
import Button from '../Button';

const Modal = () => {
  const dispatch = useDispatch();

  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(closeModal());
  };
  return (
    <div className="fixed z-10 grid h-full w-full place-content-center bg-black bg-opacity-80">
      <div className="grid h-96 w-96 place-content-center rounded-xl bg-white">
        <div>
          <img
            src="/images/default-display-image.png"
            alt="Hello"
            width={248}
            height={248}
          />
        </div>
        <p>Hello</p>
        <Button
          title="Close"
          type="button"
          variant="tertiary"
          handleOnClick={handleCloseModal}
        />
      </div>
    </div>
  );
};
export default Modal;
