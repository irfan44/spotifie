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
      <div className="grid place-content-center space-y-4 rounded-xl bg-white text-black lg:h-96 lg:w-96">
        <div className="flex w-72 flex-col items-center space-y-4 p-5">
          <div>
            {status === 'success' ? (
              <img src="/images/modal-success.png" alt="Success" />
            ) : (
              <img src="/images/modal-error.png" alt="Error" />
            )}
          </div>
          <div>
            <p className="text-center">{handleMessage()}</p>
          </div>
          <div>
            <Button
              title="Close"
              type="button"
              variant="tertiary"
              handleOnClick={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
