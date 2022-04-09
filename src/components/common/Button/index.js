const Button = ({ variant, text, onClick, type }) => {
  return (
    <button
      className={
        variant === "primary"
          ? "border py-2 px-5 rounded-full text-white font-bold"
          : variant === "secondary"
          ? "bg-white py-2 px-5 rounded-full text-black font-bold"
          : "border py-2 px-5 rounded-full text-white font-bold"
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
