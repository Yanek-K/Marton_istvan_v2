import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "./../../redux/Images/images.actions";
import Carousel from "./Carousel";

const mapState = ({ imagesData }) => ({
  images: imagesData.products,
});

const Gallery = () => {
  const dispatch = useDispatch();
  const { images } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div className="gallery-wrap">
      <Carousel ImageData={images} />
    </div>
  );
};

export default Gallery;
