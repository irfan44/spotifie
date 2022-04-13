import "../../../styles/CreatePlaylist/CreatePlaylistForm.css";
import Button from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";

const CreatePlaylist = ({
  handleSubmit,
  handleOnChange,
  value,
  errorMessage,
}) => {
  return (
    <>
      <form className="create_playlist_form" onSubmit={handleSubmit}>
        <div className="form_input_group">
          <label className="form_label" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={value.name}
            onChange={handleOnChange}
            placeholder="Insert playlist name"
          />
          <p className="form_error">{errorMessage}</p>
        </div>
        <div className="form_input_group">
          <label className="form_label" htmlFor="desc">
            Description
          </label>
          <TextArea
            id="desc"
            name="description"
            value={value.description}
            onChange={handleOnChange}
            placeholder="Insert playlist description"
          />
        </div>
        <div>
          <Button variant="primary" text="Create" type="submit" />
        </div>
      </form>
    </>
  );
};

export default CreatePlaylist;
