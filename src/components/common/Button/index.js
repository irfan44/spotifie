const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-green-500 py-2 px-5 rounded-lg text-white font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
