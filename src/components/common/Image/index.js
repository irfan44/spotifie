const Image = ({ imgUrl, title, width, height }) => {
  return <img src={imgUrl} alt={title} width={width} height={height}/>;
};

export default Image;
