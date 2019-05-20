import React from "react";

const ImagesList = props => {
  const images = props.imagesToBeShown.map(image => {
    return (
      <img key={image.id} alt={image.description} src={image.urls.regular} />
    );
  });

  return <div>{images}</div>;
};

export default ImagesList;
