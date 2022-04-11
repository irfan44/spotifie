import "./index.css";
import Button from "../../common/Button";
import Input from "../../common/Input";

const SearchBar = ({ handleOnClick, handleOnChange }) => {
  return (
    <div className="search_bar">
      <div className="search_input">
        <Input onChange={handleOnChange} placeholder="Search here" />
      </div>
      <div className="search_button">
        <Button onClick={handleOnClick} text="Search" />
      </div>
    </div>
  );
};
export default SearchBar;
