import Button from "../../common/Button";
import Input from "../../common/Input";

const SearchBar = ({ handleOnClick, handleOnChange }) => {
  return (
    <div className="grid grid-cols-[6fr_minmax(120px,1fr)] pr-2">
      <div>
        <Input onChange={handleOnChange} placeholder="Search here" />
      </div>
      <div className="mx-auto">
        <Button onClick={handleOnClick} text="Search" />
      </div>
    </div>
  );
};
export default SearchBar;
