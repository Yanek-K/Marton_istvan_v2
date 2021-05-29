import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "./../../redux/Images/images.actions";

const mapState = ({ imagesData }) => ({
  images: imagesData.products,
});

const Shop = () => {
  const dispatch = useDispatch();
  const { images } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  console.log(images);
  return (
    <div className="shop_wrap">
      <ul>
        {images.map((image) => (
          <li>
            <img
              src={image.imageUrl}
              alt="Series Images"
              className="shop_img"
            />
            <p className="shop_name">{image.imageName} </p>
            <p className="shop_price">C${image.imagePrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
