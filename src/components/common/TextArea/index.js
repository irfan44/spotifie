import Style from "../../../styles/common/TextArea.module.css";

const TextArea = ({ id, name, value, onChange, placeholder }) => {
  return (
    <textarea
      className={Style.text_area}
      rows="4"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
