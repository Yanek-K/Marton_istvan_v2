import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
  }, [dispatch]);

  console.log(images);
  return (
    <div className="shop_wrap">
      <ul>
        {images.map((image) => (
          <li>
            <Link to={`/product_details/${image.imageName}`}>
              <img
                src={image.imageUrl}
                alt="Series Images"
                className="shop_img"
              />
            </Link>
            <Link to={`/product_details/${image.imageName}`}>
              <p className="shop_name">{image.imageName} </p>
            </Link>
            <p className="shop_price">C${image.imagePrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
