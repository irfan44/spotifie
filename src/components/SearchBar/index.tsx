import { ChangeEventHandler, FormEventHandler } from 'react';
import Button from 'components/common/Button';
import Input from 'components/common/Input';

type Props = {
  handleError: boolean;
  value: string;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  handleOnSubmit: FormEventHandler<HTMLFormElement>;
};

const SearchBar = ({
  handleError,
  value,
  handleOnChange,
  handleOnSubmit,
}: Props) => {
  const isError = handleError;

  return (
    <form className="flex space-x-2" onSubmit={handleOnSubmit}>
      <Input
        id="search"
        isError={isError}
        name="search"
        placeholder="Search tracks here"
        value={value}
        handleOnChange={handleOnChange}
      />
      <Button title="Search" type="submit" variant="primary" />
    </form>
  );
};
export default SearchBar;
