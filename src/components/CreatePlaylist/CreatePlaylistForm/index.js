import Button from "../../common/Button";
import Input from "../../common/Input";

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
        <Input
          id="name"
          name="name"
          value={value.name}
          onChange={handleOnChange}
          placeholder="Insert playlist name"
        />
        <p className="text-sm text-red-600">{errorMessage}</p>
        <label htmlFor="desc">Description</label>
        <textarea
          className="p-2 bg-zinc-800 rounded-lg text-white resize-none"
          id="desc"
          name="description"
          value={value.description}
          onChange={handleOnChange}
          placeholder="Insert playlist description"
        />
        <Button variant="primary" text="Create" type="submit" />
      </form>
    </>
  );
};

export default CreatePlaylist;
