import { ChangeEventHandler, FormEventHandler } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';

type Props = {
  name: string;
  desc: string;
  handleError: boolean;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  handleTextAreaChange: ChangeEventHandler<HTMLTextAreaElement>;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
};

const CreateForm = ({
  name,
  desc,
  handleError,
  handleInputChange,
  handleTextAreaChange,
  handleOnSubmit,
}: Props) => {
  const isError = handleError;

  return (
    <form className="space-y-4" onSubmit={handleOnSubmit}>
      <div className="space-y-2">
        <label htmlFor={name}>Name</label>
        <Input
          id="name"
          isError={isError}
          name="name"
          value={name}
          placeholder="Insert playlist name"
          handleOnChange={handleInputChange}
        />
        <div className={isError ? 'font-bold text-red-600' : 'text-white'}>
          Playlist name must be at least 10 characters long
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="desc">Description</label>
        <TextArea
          id="desc"
          name="desc"
          placeholder="Insert playlist description"
          value={desc}
          handleOnChange={handleTextAreaChange}
        />
      </div>
      <div>
        <Button primary title="Create Playlist" type="submit" />
      </div>
    </form>
  );
};
export default CreateForm;
