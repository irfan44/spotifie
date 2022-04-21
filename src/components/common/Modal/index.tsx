import { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { closeModal } from 'redux/slice/modalSlice';
import Button from '../Button';

const Modal = () => {
  const status = useAppSelector((state) => state.modal.value.content.status);
  const message = useAppSelector((state) => state.modal.value.content.message);

  const dispatch = useAppDispatch();

  const handleCloseModal: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(closeModal());
  };

  const handleMessage = () => {
    if (message !== null) {
      return message;
    }
    return 'Error';
  };

  return (
    <div className="fixed z-10 grid h-full w-full place-content-center bg-black bg-opacity-80">
      <div className="grid h-96 w-96 place-content-center space-y-4 rounded-xl bg-white text-black">
        <div>
          {status === 'success' ? (
            <img
              src="/images/modal-success.png"
              alt="Success"
              width={248}
              height={248}
            />
          ) : (
            <img
              src="/images/modal-error.png"
              alt="Error"
              width={248}
              height={248}
            />
          )}
        </div>
        <p className="text-center">{handleMessage()}</p>
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
