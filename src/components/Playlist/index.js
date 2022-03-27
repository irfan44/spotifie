import PlaylistTrack from "./PlaylistTrack";

const Playlist = ({ data }) => {
  const renderPlaylistTracks =
    data !== undefined &&
    data.map((data) => {
      return <PlaylistTrack key={data.id} track={data} />;
    });
  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Playlist</h2>
      {/* <div className="space-y-4">
        {data !== "undefined" && renderPlaylistTracks}
      </div> */}
      {/* <table className="">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="text-left">Album</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderPlaylistTracks}</tbody>
      </table> */}
      <div className="space-y-1">{renderPlaylistTracks}</div>
    </div>
  );
};
export default Playlist;
