const CreatePlaylist = ({
  handleSubmit,
  handleOnChange,
  value,
  errorMessage,
}) => {
  return (
    <>
      <form
        className="flex flex-col w-96 space-y-4 mb-6"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          className="p-2 bg-zinc-800 rounded-lg text-white"
          id="name"
          name="name"
          value={value.name}
          onChange={handleOnChange}
        />
        <p className="text-sm text-red-600">{errorMessage}</p>
        <label htmlFor="desc">Description</label>
        <textarea
          className="p-2 bg-zinc-800 rounded-lg text-white resize-none"
          id="desc"
          name="description"
          value={value.description}
          onChange={handleOnChange}
        />
        <button
          className="border py-2 px-5 rounded-full text-white font-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default CreatePlaylist;
