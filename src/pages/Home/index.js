import data from "../../data/song-data";
import Playlist from "../../components/Playlist";

const Home = () => {
  return (
    <>
      <div className="px-36 py-8">
        <Playlist data={data} />
      </div>
    </>
  );
};
export default Home;
