const Image = ({ imgUrl, title, width, height }) => {
  return (
    <img
      className="rounded-lg"
      src={imgUrl}
      alt={title}
      width={width}
      height={height}
    />
  );
};

export default Image;
