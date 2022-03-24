import Button from "../common/Button";
import Image from "../common/Image";

const Track = ({ data }) => {
  return (
    <div>
      <div>
        <Image
          title={data.name}
          imgUrl={data.album.images[0].url}
          width="124"
          height="124"
        />
      </div>
      <div>
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
        <div>
          <Button text="Select" />
        </div>
      </div>
    </div>
  );
};
export default Track;
