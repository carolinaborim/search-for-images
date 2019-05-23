import React from "react";

const ImagesList = props => {
  const images = props.imagesToBeShown.map(({ description, id, urls }) => {
    return <img key={id} alt={description} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImagesList;
