import Button from "../../common/Button";
import Input from "../../common/Input";

const SearchBar = ({ handleOnClick, handleOnChange }) => {
  return (
    <div className="flex">
      <div className="grow">
        <Input onChange={handleOnChange} placeholder="Search here" />
      </div>
      <div className="mx-5">
        <Button onClick={handleOnClick} text="Search" />
      </div>
    </div>
  );
};
export default SearchBar;
