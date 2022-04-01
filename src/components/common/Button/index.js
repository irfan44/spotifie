const Button = ({ text, onClick, type }) => {
  return (
    <button
      className={
        type === "primary"
          ? "border py-2 px-5 rounded-full text-white font-bold"
          : type === "secondary"
          ? "bg-white py-2 px-5 rounded-full text-black font-bold"
          : "border py-2 px-5 rounded-full text-white font-bold"
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
