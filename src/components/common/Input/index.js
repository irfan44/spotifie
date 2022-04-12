import Style from "./Input.module.css";
const Input = ({ id, name, value, onChange, placeholder }) => {
  return (
    <input
      className={Style.input}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
