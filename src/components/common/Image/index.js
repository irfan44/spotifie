import Style from "../../../styles/common/Image.module.css";

const Image = ({ src, alt, width, height }) => {
  return (
    <>
      <img
        className={Style.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </>
  );
};

export default Image;
