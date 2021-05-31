import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchDetails } from "./../../redux/Images/images.actions";
import "./styles.scss";

const mapState = ({ imagesData }) => ({
  product: imagesData.product[0],
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchDetails(productId));

    return () => {
      dispatch(fetchDetails());
    };
  }, [dispatch, productId]);

  return (
    <div className="product">
      <div className="page_wrap">
        <div className="image_wrap">
          {product && <img src={product.imageUrl} alt="view-selection" />}
        </div>
        <div className="product_details">
          {product && (
            <p className="product_details_title"> {product.imageName}</p>
          )}
          {product && <p>C${product.imagePrice}</p>}

          <p className="product_details_quantity">Quantity</p>
          <btn className="products_details_button">Add To Cart</btn>
          <div className="product_details_text">
            <h4>Description:</h4>
            <p>
              Image size: 108 x 162mm floating on 8.5 x 11" Hahnemühle cotton
              paper.
            </p>
            <hr />
            <h4>Please Note:</h4>
            <p>The gray mat shown is for illustration purposes only.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
