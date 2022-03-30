const Input = ({ onChange, placeholder }) => {
  return (
    <input
      className="bg-zinc-800 rounded-lg p-2 text-white w-full"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
