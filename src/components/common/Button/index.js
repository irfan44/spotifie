import Style from "../../../styles/common/Button.module.css";

const Button = ({ variant, text, onClick, type }) => {
  return (
    <button
      className={
        variant === "primary"
          ? Style.button + " " + Style.primary
          : variant === "secondary"
          ? Style.button + " " + Style.secondary
          : Style.button + " " + Style.primary
      }
      onClick={onClick}
      type={
        type === "submit" ? "submit" : type === "reset" ? "reset" : "button"
      }
    >
      {text}
    </button>
  );
};

export default Button;
