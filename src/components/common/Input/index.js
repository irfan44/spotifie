const Input = ({ id, name, value, onChange, placeholder }) => {
  return (
    <input
      className="bg-zinc-800 rounded-lg p-2 text-white w-full"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
